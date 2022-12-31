import { Snowflake } from 'discord.js'

export interface KoreanbotsRequestOptions {
  token: string
  version: Version
}

export interface BaseOptions {
  api: KoreanbotsRequestOptions
}

export interface KoreanbotsOptions extends BaseOptions {
  clientId: Snowflake
}

export interface KoreanBotsClientOptions extends BaseOptions {
  updateInterval?: number
}

export type Version = 1 | 2

export interface RoutesInfo {
  url: string
  headers?: {
    Authorization: string
  }
  body?: {
    servers: number
    shards?: number
  }
}
