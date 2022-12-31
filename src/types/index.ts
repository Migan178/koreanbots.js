import { type Snowflake } from 'discord.js'

export interface KoreanbotsRequestOptions {
  token: string
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
  query?: Record<string, any>
}

export * from './ApiResponse'

export enum BotFlags {
  None = 0 << 0,
  Official = 1 << 0,
  KrBotsOfficial = 1 << 2,
  Partner = 1 << 3,
  Verified = 1 << 4,
  Premium = 1 << 5,
  HackathonBot = 1 << 6,
}

export enum UserFlags {
  None = 0 << 0,
  Administrator = 1 << 0,
  BugHunter = 1 << 1,
  Reviewer = 1 << 2,
  Premium = 1 << 3,
}

export type BotCategory =
  | '관리'
  | '뮤직'
  | '전적'
  | '게임'
  | '도박'
  | '로깅'
  | '빗금 명령어'
  | '웹 대시보드'
  | '밈'
  | '레벨링'
  | '유틸리티'
  | '대화'
  | 'NSFW'
  | '검색'
  | '학교'
  | '코로나19'
  | '번역'
  | '오버워치'
  | '리그 오브 레전드'
  | '배틀그라운드'
  | '마인크래프트'

export type BotStatus = 'online' | 'idle' | 'dnd' | 'streaming' | 'offline'

export type BotState = 'ok' | 'reported' | 'blocked' | 'private' | 'archived'

export type ListType = 'new' | 'votes'
