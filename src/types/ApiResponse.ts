import type {
  BotFlags,
  Version,
  UserFlags,
  BotCategory,
  BotStatus,
  BotState,
  ServerCategory,
  ServerEmoji,
  ServerState,
  Library,
  ServerFlags,
} from '.'
import type { Snowflake } from 'discord.js'

export interface GetBotResponseData {
  id: Snowflake
  name: string
  tag: string
  avatar?: string
  owners: GetUsersResponseData[]
  flags: BotFlags
  lib: Library
  prefix: string
  votes: number
  servers?: number
  shards?: number
  intro: string
  desc: string
  web?: string
  git?: string
  url?: string
  discord?: string
  category: BotCategory[]
  vanity?: string
  bg?: string
  banner?: string
  status?: BotStatus
  state?: BotState
}

export interface GetUsersResponseData {
  id: Snowflake
  flags: UserFlags
  github?: string
  tag: string
  username: string
  bots: (string | GetBotResponseData)[]
  servers: (string | GetServerResponseData)[]
}

export interface GetUsersResponse extends BaseResponse {
  data?: GetUsersResponseData
  message?: string
}

export interface BaseResponse {
  code: number
  version: Version
}

export interface UpdateBotResponse extends BaseResponse {
  message: string
}

export interface GetBotResponse extends BaseResponse {
  data?: GetBotResponseData
  message?: string
}

export interface BotListsResponse extends BaseResponse {
  data?: {
    type: string
    data: GetBotResponseData[]
    currentPage: number
    totalPage: number
  }
  message?: string
}

export interface CheckBotVotesResponse extends BaseResponse {
  data?: {
    voted: boolean
    lastVote: number
  }
  message?: string
}

export interface GetServerResponseData {
  id: Snowflake
  name: string
  icon?: string
  owner: GetUsersResponse
  flags: ServerFlags
  votes: number
  members: number
  boostTier: number
  intro: string
  desc: string
  category: ServerCategory[]
  invite: string
  emojis: ServerEmoji[]
  vanity?: string
  bg?: string
  banner?: string
  state: ServerState
}

export interface GetServerResponse extends BaseResponse {
  data?: GetServerResponseData
  message?: string
}
