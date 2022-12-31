import { Koreanbots } from './Koreanbots'
import type { Snowflake } from 'discord.js'
import type {
  BotListsResponse,
  CheckBotVotesResponse,
  GetBotResponse,
  ListType,
  UpdateBotResponse,
} from '../types'
import { Routes } from '../rest'
import { Base } from './Base'

export class Bot extends Base {
  public constructor(koreanbots: Koreanbots) {
    super(koreanbots)
  }

  public async getBot(id: Snowflake): Promise<GetBotResponse> {
    const a = await this.rest.sendGet(new Routes().bots.getBot(id))
    return a.body.json()
  }

  public async updateBot(
    id: Snowflake,
    options: {
      servers: number
      shards?: number
      token: string
    }
  ): Promise<UpdateBotResponse> {
    const a = await this.rest.sendPost(
      new Routes().bots.updateBot(this.options.clientId, {
        body: { servers: options.servers, shards: options.shards || 0 },
        token: options.token,
      })
    )
    return a.body.json()
  }

  public async searchBots(
    query: string,
    pages?: number
  ): Promise<BotListsResponse> {
    const a = await this.rest.sendGet(
      new Routes().bots.searchBots(query, pages)
    )
    return a.body.json()
  }

  public async botLists(
    listType: ListType,
    pages?: number
  ): Promise<BotListsResponse> {
    const a = await this.rest.sendGet(
      new Routes().bots.botLists(listType, pages)
    )
    return a.body.json()
  }

  public async checkBotVotes(options: {
    botId: Snowflake
    userId: Snowflake
    token: string
  }): Promise<CheckBotVotesResponse> {
    const a = await this.rest.sendGet(
      new Routes().bots.checkBotVotes(
        options.botId,
        options.userId,
        options.token
      )
    )
    return a.body.json()
  }
}
