import type { Koreanbots } from './Koreanbots'
import type { CheckBotVotesResponse, UpdateBotResponse } from '../types'
import { Snowflake } from 'discord.js'

export class MyBot {
  private koreanbots: Koreanbots
  public constructor(koreanbots: Koreanbots) {
    this.koreanbots = koreanbots
  }

  public async get() {
    return await this.koreanbots.getBot(this.koreanbots.options.clientId)
  }

  public async update(options: {
    servers: number
    shards?: number
  }): Promise<UpdateBotResponse> {
    return await this.koreanbots.updateBot(this.koreanbots.options.clientId, {
      servers: options.servers,
      shards: options.shards || 1,
      token: this.koreanbots.options.api.token,
    })
  }

  public async checkVotes(userId: Snowflake): Promise<CheckBotVotesResponse> {
    return await this.koreanbots.checkBotVotes({
      botId: this.koreanbots.options.clientId,
      userId,
      token: this.koreanbots.options.api.token,
    })
  }
}
