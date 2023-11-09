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
  KrBotsVerified = 1 << 2,
  Partner = 1 << 3,
  DiscordVerified = 1 << 4,
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

export enum ServerFlags {
  None = 0 << 0,
  Official = 1 << 0,
  KrBotsVerified = 1 << 2,
  KrBotsPartner = 1 << 3,
  DiscordVerified = 1 << 4,
  DiscordPartner = 1 << 5,
}

export type ServerCategory =
  | '커뮤니티'
  | 'IT & 과학'
  | '봇'
  | '친목'
  | '음악'
  | '교육'
  | '연애'
  | '게임'
  | '오버워치'
  | '리그 오브 레전드'
  | '배틀그라운드'
  | '마인크래프트'

export interface ServerEmoji {
  id: Snowflake
  name: string
  url: string
}

export type ServerState = 'ok' | 'reported' | 'blocked' | 'unreachable'

export type Library =
  | 'discord.js'
  | 'Eris'
  | 'discord.py'
  | 'discordcr'
  | 'Nyxx'
  | 'Discord.Net'
  | 'DSharpPlus'
  | 'Nostrum'
  | 'coxir'
  | 'DiscordGo'
  | 'Discord4J'
  | 'Javacord'
  | 'JDA'
  | 'Discordia'
  | 'RestCord'
  | 'Yasmin'
  | 'disco'
  | 'discordrb'
  | 'serenity'
  | 'SwiftDiscord'
  | 'Sword'
  | '기타'
  | '비공개'

export type BotWidgetType = 'votes' | 'servers' | 'status'

export type ServerWidgetType = 'votes' | 'members' | 'boost'

export interface WebhookData {
  type: 'bot' | 'server'
  data: WebhookBotData | WebhookGuildData
  timestamp: number
}

export interface WebhookBotData {
  type: 0 | 1
  botId: Snowflake
  before?: number
  after: number
  userId?: Snowflake
}

export interface WebhookGuildData {
  type: 0 | 1
  guildId: Snowflake
  before?: number
  after: number
}
