import type {
  BotListsResponse,
  CheckBotVotesResponse,
  GetBotResponse,
  KoreanbotsOptions,
  ListType,
  UpdateBotResponse,
} from '../types'
import { RestClient } from '../rest'
import { type Snowflake } from 'discord.js'
import { Routes } from '../rest/Routes'
import { MyBot } from './MyBot'

export class Koreanbots {
  public readonly options: KoreanbotsOptions
  public readonly rest: RestClient
  public myBot: MyBot
  public constructor(options: KoreanbotsOptions) {
    this.options = options
    this.rest = new RestClient()
    this.myBot = new MyBot(this)
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
