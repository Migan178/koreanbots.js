import { Client, type ClientOptions, Events } from 'discord.js'
import { type KoreanBotsClientOptions } from '../types'
import { Koreanbots } from './Koreanbots'

export class KoreanbotsClient extends Client {
  public readonly koreanbotsOptions: KoreanBotsClientOptions
  public koreanbots?: Koreanbots
  public constructor(
    options: ClientOptions,
    koreanbotsOptions: KoreanBotsClientOptions
  ) {
    super(options)
    this.koreanbotsOptions = koreanbotsOptions
    if (
      !koreanbotsOptions.updateInterval ||
      isNaN(koreanbotsOptions.updateInterval)
    )
      throw new Error('updateInterval 값의 타입은 숫자여야 합니다.')
    this.on(Events.ClientReady, () => {
      this.koreanbots = new Koreanbots({
        api: koreanbotsOptions.api,
        clientId: this.user!.id,
      })
      const a = () =>
        this.koreanbots!.myBot.update({
          servers: this.guilds.cache.size,
          shards: this.shard?.count,
        })
      a()
      setInterval(a, this.koreanbotsOptions.updateInterval)
    })
  }
}
