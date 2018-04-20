console.log('Starting node server')
const app = require('express')()
const http = require('http').Server(app)
const bodyParser = require('body-parser')
const cors = require('cors')

const restApi = require('./src/modules/rest/api')
const socketApi = require('./src/modules/socket/api')
const config = require('./src/modules/configurations')
const port = config.read('port') || 3000
const application = require('./src/modules/application')

application.loadModules()

app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

app.use(cors());

// parse application/x-www-form-urlencodedq
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

http.listen(port, function () {
  console.log('listening on *:' + port)
  socketApi(http)
  restApi(app)
})
