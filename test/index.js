const { KoreanbotsWebhook } = require('..')

new KoreanbotsWebhook(1234, body => {
  console.log(body)
}).init()
