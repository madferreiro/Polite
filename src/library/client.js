/* Abstraction of a client. Useful for socket interaction */
const event = require('./event')

const client = {}

const clients = {}

const doMake = (params) => {
  const { user, socket, token } = params
  const newClient = { user, socket, token } 
  newClient.asyncSend = (event, promise) => {
    promise.then(data => {
      socket.emit(`${event}`, JSON.stringify(data))
    })
  }
  newClient.send = (event, data) => {
    socket.emit(`${event}`, JSON.stringify(data))
  }
  bindClientEvents(newClient)
  return newClient
}

const receive = function (jsonMessage, handler) {
  try {
    handler(JSON.parse(jsonMessage));
  } catch (e) {
    console.log(e)
  }
}

const bindClientEvents = (client) => {
  const { user, socket } = client
  client.events = {
    calculator : {
      sum : event(),
      minus : event(),
      divide : event(),
      multiply : event()
    }
  }
  //The following code autobinds every event.
  //The sum method on calculator will be available as calculator.sum on the socket api
  Object.keys(client.events).forEach( namespace => {
    Object.keys(client.events[namespace]).forEach ( eventName => {
      client.socket.on( namespace + '.' + eventName, (jsonMessage) => { 
        receive(jsonMessage, (message) => { 
          client.events[namespace][eventName].emit({ client, message }) 
        }) 
      })
    })
  })
}


client.new = (params) => {
  const client = doMake(params)
  clients[client.token] = client
  return client
}

client.get = (userId) => clients[userId]

module.exports = client