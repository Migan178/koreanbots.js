import { type RoutesInfo } from '../types'
import { request } from 'undici'
import { KoreanbotsAPIError } from '../error'

export class RestClient {
  public readonly url: string
  public constructor() {
    this.url = 'https://koreanbots.dev/api/v2'
  }

  public async sendGet(routes: RoutesInfo) {
    const res = await request(`${this.url}${routes.url}`, {
      method: 'GET',
      headers: { ...routes.headers, 'Content-Type': 'application/json' },
      query: routes.query,
    })

    if (res.statusCode !== 200)
      throw new KoreanbotsAPIError(`${JSON.stringify(await res.body.json())}`)
    return res
  }
  public async sendPost(routes: RoutesInfo) {
    const res = await request(`${this.url}${routes.url}`, {
      method: 'POST',
      headers: { ...routes.headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...routes.body }),
      query: routes.query,
    })

    if (res.statusCode !== 200)
      throw new KoreanbotsAPIError(`${JSON.stringify(await res.body.json())}`)
    return res
  }
}
