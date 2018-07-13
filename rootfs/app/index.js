const express = require('express')
const bodyParser = require('body-parser')

const server = express()
server.use(bodyParser.urlencoded({ limit: process.env.BODY_LIMIT_SIZE || '50mb', extended: true }))
server.use(bodyParser.json({ limit: process.env.BODY_LIMIT_SIZE || '50mb' }))

server.get('/', (req, res) => {
  return 'ok'
})

const main = async () => {
  server.listen(80, () => {
    logger.info('Listerning on port 80')
  })
}

if ((typeof require != 'undefined') && (require.main === module)) {
  main()
}

exports = module.exports = server
