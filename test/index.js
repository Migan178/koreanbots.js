const { KoreanbotsClient } = require('..')
const { GatewayIntentBits } = require('discord.js')
const { KR_TOKEN, DISCORD_TOKEN } = require('./config.json')

const client = new KoreanbotsClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    api: {
      version: 2,
      token: KR_TOKEN,
    },
    updateInterval: 600000,
  }
)

client.login(DISCORD_TOKEN)
