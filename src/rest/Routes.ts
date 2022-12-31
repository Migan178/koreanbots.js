import type { Snowflake } from 'discord.js'
import type { ListType, RoutesInfo } from '../types'

export class Routes {
  public readonly bots = {
    getBot(id: Snowflake): RoutesInfo {
      return { url: `/bots/${id}` }
    },
    updateBot(
      id: Snowflake,
      options: {
        body: {
          servers: number
          shards: number
        }
        token: string
      }
    ): RoutesInfo {
      return {
        url: `/bots/${id}/stats`,
        body: options.body,
        headers: { Authorization: options.token },
      }
    },
    searchBots(query: string, pages?: number): RoutesInfo {
      return {
        url: `/search/bots`,
        query: { query, pages },
      }
    },
    botLists(listType: ListType, pages?: number): RoutesInfo {
      return {
        url: `/list/bots/${listType}`,
        query: { pages },
      }
    },
    checkBotVotes(
      botId: Snowflake,
      userId: Snowflake,
      token: string
    ): RoutesInfo {
      return {
        url: `/bots/${botId}/vote`,
        query: {
          userID: userId,
        },
        headers: {
          Authorization: token,
        },
      }
    },
  }

  public readonly user = {
    getUser(id: Snowflake): RoutesInfo {
      return {
        url: `/users/${id}`,
      }
    },
  }

  public readonly server = {
    getServer(id: Snowflake): RoutesInfo {
      return {
        url: `/servers/${id}`,
      }
    },
  }
}
