import type { KoreanbotsOptions } from '../types'
import { RestClient } from '../rest'
import { MyBot } from './MyBot'
import { Bot } from './Bot'
import { User } from './User'
import { Server } from './Server'
import { Widget } from './Widget'

export class Koreanbots {
  public readonly options: KoreanbotsOptions
  public readonly rest: RestClient
  public readonly myBot: MyBot
  public readonly bot: Bot
  public readonly user: User
  public readonly server: Server
  public readonly widget: Widget
  public constructor(options: KoreanbotsOptions) {
    this.options = options
    this.rest = new RestClient()
    this.myBot = new MyBot(this)
    this.bot = new Bot(this)
    this.user = new User(this)
    this.server = new Server(this)
    this.widget = new Widget(this)
  }
}
