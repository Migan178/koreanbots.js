import type { Koreanbots } from './Koreanbots'
import type {
  CheckBotVotesResponse,
  GetBotResponse,
  UpdateBotResponse,
} from '../types'
import type { Snowflake } from 'discord.js'

export class MyBot {
  private koreanbots: Koreanbots
  public constructor(koreanbots: Koreanbots) {
    this.koreanbots = koreanbots
  }

  public async get(): Promise<GetBotResponse> {
    return await this.koreanbots.bot.getBot(this.koreanbots.options.clientId)
  }

  public async update(options: {
    servers: number
    shards?: number
  }): Promise<UpdateBotResponse> {
    return await this.koreanbots.bot.updateBot(
      this.koreanbots.options.clientId,
      {
        servers: options.servers,
        shards: options.shards || 1,
        token: this.koreanbots.options.api.token,
      }
    )
  }

  public async checkVotes(userId: Snowflake): Promise<CheckBotVotesResponse> {
    return await this.koreanbots.bot.checkBotVotes({
      botId: this.koreanbots.options.clientId,
      userId,
      token: this.koreanbots.options.api.token,
    })
  }
}
