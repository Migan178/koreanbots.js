import { type RoutesInfo } from '../types'
import { request } from 'undici'

export class RestClient {
  public readonly url: string
  public constructor() {
    this.url = 'https://koreanbots.dev/api/v2'
  }

  public async sendGet(routes: RoutesInfo) {
    return await request(`${this.url}${routes.url}`, {
      method: 'GET',
      headers: { ...routes.headers, 'Content-Type': 'application/json' },
      query: routes.query,
    })
  }
  public async sendPost(routes: RoutesInfo) {
    return await request(`${this.url}${routes.url}`, {
      method: 'POST',
      headers: { ...routes.headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...routes.body }),
      query: routes.query,
    })
  }
}
