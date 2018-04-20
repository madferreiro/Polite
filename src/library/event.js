/* Minimal implementation of event. */

const arrayHelper = require('./utils/array')

const event = () => {
  const event = {}
  event.listeners = []
  event.emit = (context) => event.listeners.forEach(listener => listener(context))
  event.subscribe = (listener) => event.listeners.push(listener)
  event.unsubscribe = (listener) => arrayHelper.reject(event.listeners, o => { return o === listener })
  return event
}


module.exports = event