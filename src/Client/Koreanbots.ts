import { type KoreanbotsOptions } from '../types'
import { RestClient } from '../rest'
import { Snowflake } from 'discord.js'
import { Routes } from '../rest/Routes'
import { MyBot } from './MyBot'

export class Koreanbots {
  public readonly options: KoreanbotsOptions
  public readonly rest: RestClient
  public myBot: MyBot
  public constructor(options: KoreanbotsOptions) {
    this.options = options
    this.rest = new RestClient(options.api.version)
    this.myBot = new MyBot(this)
  }

  public async getBot(id: Snowflake) {
    this.rest.sendGet(new Routes().bots.getBot(id))
  }

  public async updateBot(
    id: Snowflake,
    options: {
      servers: number
      shards?: number
      token: string
    }
  ) {
    this.rest.sendPost(
      new Routes().bots.updateBot(this.options.clientId, {
        body: { servers: options.servers, shards: options.shards || 0 },
        token: options.token,
      })
    )
  }
}
