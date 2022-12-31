const { Koreanbots } = require('..')
const { KR_TOKEN, CLIENT_ID } = require('./config.json')

const client = new Koreanbots({
  api: {
    token: KR_TOKEN,
    version: 2,
  },
  clientId: CLIENT_ID,
})

client.user.getUser().then(res => console.log(JSON.stringify(res)))
