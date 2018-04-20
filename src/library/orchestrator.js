/* Orchestrates server events */
const event = require('./event')

const orchestrator = {}

// Every service module must listem to this event in order to bind its functions to client events. 
orchestrator.OnClientSignIn = event()

/// These are rest api events
/// The context they provide are: { request, response, next }
orchestrator.calculator = {} // calculator events namespace 
orchestrator.calculator.sum = event()
orchestrator.calculator.minus = event()
orchestrator.calculator.divide = event()
orchestrator.calculator.multiply = event()

module.exports = orchestrator