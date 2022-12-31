import { Base } from './Base'
import type { Koreanbots } from './Koreanbots'
import type { Snowflake } from 'discord.js'
import type { GetServerResponse } from '../types'
import { Routes } from '../rest'

export class Server extends Base {
  public constructor(koreanbots: Koreanbots) {
    super(koreanbots)
  }

  public async getServer(id: Snowflake): Promise<GetServerResponse> {
    const a = await this.rest.sendGet(new Routes().server.getServer(id))
    return a.body.json()
  }
}
