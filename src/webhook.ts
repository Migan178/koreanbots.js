import express = require('express')
import { BotWebhookData, ServerWebhookData } from './types/index.js'

const app = express()
app.use(express.json())

export class KoreanbotsWebhook {
  public constructor(
    public readonly port: number,
    public readonly callback: (body: ServerWebhookData | BotWebhookData) => any
  ) {
    if (!port) this.port = 80
  }

  public init() {
    app.get('/', (req, res) => {
      res.json({ secret: req.query.secret })
      console.log(req.query.secret)
    })
    app.post('/', (req, res) => {
      this.callback(req.body)
      console.log(req.headers)
      res.send()
    })
    app.listen(this.port, () =>
      console.log('[Koreanbots] Webhook port: ' + this.port)
    )
  }
}
