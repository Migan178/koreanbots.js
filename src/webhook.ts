import express = require('express')
import { WebhookData, WebhookOptions } from './types'

const app = express()
app.use(express.json())

export class KoreanbotsWebhook {
  #callback: (body: WebhookData) => any
  #port: number
  #secret?: string
  #verifyWebhook?: boolean

  public constructor(
    options: WebhookOptions,
    callback: (body: WebhookData) => any
  ) {
    if (!options.port)
      throw new TypeError(
        `"port" 값의 타입은 숫자여야 합니다. 받은 타입: ${typeof options.port}`
      )
    else this.#port = options.port
    this.#callback = callback
    this.#verifyWebhook = options.verifyWebhook
  }

  public init() {
    app.get('/', (req, res) => {
      res.json({ secret: req.query.secret })
      if (this.#verifyWebhook) {
        this.#secret = req.query.secret as string
      }
    })

    app.post('/', (req, res) => {
      if (this.#verifyWebhook) {
        if (req.headers.secret !== this.#secret) {
          res.status(401).json({ code: 401, message: '잘못된 `secret`값.' })
        } else {
          this.#callback(req.body)
          res.send()
        }
      } else {
        this.#callback(req.body)
        res.send()
      }
    })
    app.listen(this.#port, () => {
      console.log(
        `[@migan/koreanbots] ${this.#port}포트로 웹훅을 시작했습니다.`
      )
    })
  }
}
