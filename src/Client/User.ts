import { Base } from './Base'
import type { Koreanbots } from './Koreanbots'
import type { Snowflake } from 'discord.js'
import { Routes } from '../rest'
import type { GetUsersResponse } from '../types'

export class User extends Base {
  public constructor(koreanbots: Koreanbots) {
    super(koreanbots)
  }

  public async getUser(id: Snowflake): Promise<GetUsersResponse> {
    const a = await this.rest.sendGet(new Routes().user.getUser(id))
    return a.body.json()
  }
}
