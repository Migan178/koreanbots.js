import type { RestClient } from '../rest'
import type { Koreanbots } from './Koreanbots'
import type { KoreanbotsOptions } from '../types'

export abstract class Base {
  public readonly rest: RestClient
  public readonly koreanbots: Koreanbots
  public readonly options: KoreanbotsOptions
  protected constructor(koreanbots: Koreanbots) {
    this.koreanbots = koreanbots
    this.rest = koreanbots.rest
    this.options = koreanbots.options
  }
}
