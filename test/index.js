const { Koreanbots } = require('..')
const { KR_TOKEN, CLIENT_ID } = require('./config.json')

const client = new Koreanbots({
  api: {
    token: KR_TOKEN,
  },
  clientId: CLIENT_ID,
})

console.log(client.widget.getBotWidgetURL('704999866094452816', 'votes'))
