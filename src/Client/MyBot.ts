import { Koreanbots } from './Koreanbots'

export class MyBot {
  private koreanbots: Koreanbots
  public constructor(koreanbots: Koreanbots) {
    this.koreanbots = koreanbots
  }

  public async get() {
    this.koreanbots.getBot(this.koreanbots.options.clientId)
  }

  public async update(options: { servers: number; shards?: number }) {
    this.koreanbots.updateBot(this.koreanbots.options.clientId, {
      servers: options.servers,
      shards: options.shards || 1,
      token: this.koreanbots.options.api.token,
    })
  }
}
