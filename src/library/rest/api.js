/* 
    Implements listener to rest api 
*/
const orchestrator = require('../orchestrator')

const pathToEvent = {
    '/api/calculator/sum' : { method: 'post',  event: orchestrator.calculator.sum },
    '/api/calculator/minus' : { method: 'post',  event: orchestrator.calculator.minus },
    '/api/calculator/divide' : { method: 'post',  event: orchestrator.calculator.divide },
    '/api/calculator/multiply' : { method: 'post',  event: orchestrator.calculator.multiply }
}

const bindEndpointsToEvents = (arguments) => {
    const { app, pathToEvent } = arguments
    Object.entries(pathToEvent).forEach(entry => {
        const endpoint = entry[0]
        const { method, event } = entry[1]
        app[method](endpoint, (req, res, next) => event.emit({ req, res, next }) )
    })
}

module.exports = (app) => {
    console.log('Starting rest api')
    bindEndpointsToEvents({ app, pathToEvent })
    app.get('/health', (req, res, next) => {
        res.json({ status: 'OK' }, 200)
        next()
    })
    console.log('Rest api fully active and waiting for requests')
}