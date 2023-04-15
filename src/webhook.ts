import express = require('express')
import { BotWebhookData, ServerWebhookData } from './types'

const app = express()
app.use(express.json())

export class KoreanbotsWebhook {
  #callback: (body: ServerWebhookData | BotWebhookData) => any
  #port: number
  public constructor(
    port: number,
    callback: (body: ServerWebhookData | BotWebhookData) => any
  ) {
    if (!port)
      throw new TypeError(
        `"port" 값의 타입은 숫자여야 합니다. 받은 타입: ${typeof port}`
      )
    else this.#port = port
    this.#callback = callback
  }

  public init() {
    app.get('/', (req, res) => {
      res.json({ secret: req.query.secret })
    })
    app.post('/', (req, res) => {
      this.#callback(req.body)
      res.send()
    })
    app.listen(this.#port)
  }
}
