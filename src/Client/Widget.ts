import { Base } from './Base'
import type { Koreanbots } from './Koreanbots'
import type { Snowflake } from 'discord.js'
import type { BotWidgetType, ServerWidgetType } from '../types'

export class Widget extends Base {
  public readonly baseURL = `https://koreanbots.dev/api/widget`
  constructor(koreanbots: Koreanbots) {
    super(koreanbots)
  }

  public getBotWidgetURL(id: Snowflake, type: BotWidgetType) {
    return `${this.baseURL}/bots/${type}/${id}.svg`
  }

  public getServerWidgetURL(id: Snowflake, type: ServerWidgetType) {
    return `${this.baseURL}/servers/${type}/${id}.svg`
  }
}
