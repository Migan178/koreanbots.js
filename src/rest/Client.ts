import { type RoutesInfo } from '../types'
import { request } from 'undici'
import { KoreanbotsAPIError } from '../error'

export class RestClient {
  public readonly url: string
  public constructor() {
    this.url = 'https://koreanbots.dev/api/v2'
  }

  public async sendGet(routes: RoutesInfo) {
    const a = await request(`${this.url}${routes.url}`, {
      method: 'GET',
      headers: { ...routes.headers, 'Content-Type': 'application/json' },
      query: routes.query,
    })

    if (a.statusCode !== 200)
      throw new KoreanbotsAPIError(`${JSON.stringify(await a.body.json())}`)
    return a
  }
  public async sendPost(routes: RoutesInfo) {
    const a = await request(`${this.url}${routes.url}`, {
      method: 'POST',
      headers: { ...routes.headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...routes.body }),
      query: routes.query,
    })

    if (a.statusCode !== 200)
      throw new KoreanbotsAPIError(`${JSON.stringify(await a.body.json())}`)
    return a
  }
}
