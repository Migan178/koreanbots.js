import { Snowflake } from 'discord.js'
import { RoutesInfo } from '../types'

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
  }
}
