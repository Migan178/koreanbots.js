import type { Koreanbots } from './Koreanbots'
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
    const res = await this.rest.sendGet(new Routes().bots.getBot(id))
    return res.body.json()
  }

  public async updateBot(
    id: Snowflake,
    options: {
      servers: number
      shards?: number
      token: string
    }
  ): Promise<UpdateBotResponse> {
    const res = await this.rest.sendPost(
      new Routes().bots.updateBot(id, {
        body: {
          servers: options.servers,
          shards: options.shards || 1,
        },
        token: options.token,
      })
    )
    return res.body.json()
  }

  public async searchBots(
    query: string,
    pages?: number
  ): Promise<BotListsResponse> {
    const res = await this.rest.sendGet(
      new Routes().bots.searchBots(query, pages)
    )
    return res.body.json()
  }

  public async botLists(
    listType: ListType,
    pages?: number
  ): Promise<BotListsResponse> {
    const res = await this.rest.sendGet(
      new Routes().bots.botLists(listType, pages)
    )
    return res.body.json()
  }

  public async checkBotVotes(options: {
    botId: Snowflake
    userId: Snowflake
    token: string
  }): Promise<CheckBotVotesResponse> {
    const res = await this.rest.sendGet(
      new Routes().bots.checkBotVotes(
        options.botId,
        options.userId,
        options.token
      )
    )
    return res.body.json()
  }
}
