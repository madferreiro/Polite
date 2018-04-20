/* 
    Implements listener to socket API 
*/
const io = require('socket.io')
const client = require('../client')
const orchestrator = require('../orchestrator')
 
module.exports = (http) => {
  console.log('Starting socket api')
  listener = io(http);
  listener.on('connection', function (socket) {
    console.log('Socket api is now listening to a new connection')
    socket.on('signOn', function (jsonMessage) {
      const { user, token } = JSON.parse(jsonMessage)
      const client = client.new({ socket, user, token })
      orchestrator.OnClientSignIn.emit({ client })
    })
  })
  console.log('Socket api fully active and waiting for connections')
}