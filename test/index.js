const { KoreanbotsWebhook } = require('..')

new KoreanbotsWebhook(
  {
    port: 1234,
    verifyWebhook: false,
  },
  body => {
    console.log(body)
  }
).init()
