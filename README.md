# <h1 style="text-align: center;">@migan/koreanbots</h1>

<h4 style="text-align: center;">이 패키지는 한국 디스코드 리스트의 공식 SDK가 아님을 알립니다.</h4>

## 설치

```sh
npm i @migan/koreanbots
```

### 사용

#### 서버수 자동 업데이트

```js
const { KoreanbotsClient } = require('@migan/koreanbots')
const { GatewayIntentBits } = require('discord.js')

const client = new KoreanbotsClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    api: {
      token: '당신의 봇의 한디리 토큰',
    },
    updateInterval: 600000,
  }
)

client.login('당신의 봇의 토큰')
```

#### 서버수 수동 업데이트

```js
const { GatewayIntentBits, Client } = require('discord.js')
const { Koreanbots } = require('@migan/koreanbots')

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
})

const krBots = new Koreanbots({
  api: {
    token: '당신의 봇의 한디리 토큰',
  },
  clientId: '당신의 봇의 아이디',
})

client.on('ready', () => {
  const update = () =>
    krbots.myBot
      .update({
        servers: client.guilds.cache.size,
        shards: client.shard?.count,
      })
      .then(res => console.log(JSON.stringify(res)))
  update()
  setInterval(update, 600000)
})

client.login('당신의 봇의 토큰')
```
