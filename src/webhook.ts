import express = require('express')
import { WebhookData } from './types'

const app = express()
app.use(express.json())

export class KoreanbotsWebhook {
  #callback: (body: WebhookData) => any
  #port: number
  #secret: string
  public constructor(port: number, callback: (body: WebhookData) => any) {
    if (!port)
      throw new TypeError(
        `"port" 값의 타입은 숫자여야 합니다. 받은 타입: ${typeof port}`
      )
    else this.#port = port
    this.#callback = callback
    this.#secret = ''
  }

  public init() {
    app.get('/', (req, res) => {
      res.json({ secret: req.query.secret })
      this.#secret = req.query.secret as string
    })

    app.post('/', (req, res) => {
      if (req.headers.secret !== this.#secret) {
        console.log('[@migan/koreanbots] 검증되지 않은 요청이 들어왔습니다.')
        res.status(401).json({ code: 401, message: '잘못된 `secret`값.' })
      } else {
        this.#callback(req.body)
        res.send()
      }
    })
    app.listen(this.#port)
  }
}
