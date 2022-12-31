import { type RoutesInfo, type Version } from '../types'
import { request } from 'undici'

export class RestClient {
  public readonly version: Version
  public readonly url: string
  public constructor(version: Version) {
    this.version = version
    this.url = `https://koreanbots.dev/api/v${version}`
  }

  public async sendGet(routes: RoutesInfo) {
    const a = await request(`${this.url}/${routes.url}`, {
      method: 'GET',
      headers: { ...routes.headers, 'Content-Type': 'application/json' },
    })
    console.log(await a.body.json())
    return a
  }
  public async sendPost(routes: RoutesInfo) {
    const a = await request(`${this.url}/${routes.url}`, {
      method: 'POST',
      headers: { ...routes.headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...routes.body }),
    })
    console.log(await a.body.json())
    return a
  }
}
