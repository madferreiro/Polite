/* 
    This is a service module example. 
    A service module is responsible for listening to request events (either in rest 
    or socket api), opening the request envelopes, calling the service implementation and 
    sending the result back throught the proper channel.
*/
const orchestrator = require('../../modules/orchestrator')
const calculator = require('./calculator')

orchestrator.calculator.sum.subscribe( ( context ) => {
    const { req, res, next } = context
    const result = calculator.sum( req.body.leftOperand, req.body.rightOperand ) 
    res.sendStatus(200).send({ result })
    next()
})
orchestrator.calculator.minus.subscribe( ( context ) => {
    const { req, res, next } = context
    const result = calculator.minus( req.body.leftOperand, req.body.rightOperand ) 
    res.sendStatus(200).send({ result })
    next()
})
orchestrator.calculator.divide.subscribe( ( context ) => {
    const { req, res, next } = context
    const result = calculator.divide( req.body.leftOperand, req.body.rightOperand ) 
    res.sendStatus(200).send({ result })
    next()
})
orchestrator.calculator.multiply.subscribe( ( context ) => {
    const { req, res, next } = context
    const result = calculator.multiply( req.body.leftOperand, req.body.rightOperand ) 
    res.sendStatus(200).send({ result })
    next()
})

orchestrator.OnClientSignIn.subscribe( ( context ) => {
    const { client } = context
    client.events.calculator.sum.subscribe( (context) => {
        const { client, message } = context
        client.send( calculator.sum( message.leftOperand, message.rightOperand ) )
    })
    client.events.calculator.minus.subscribe( (context) => {
        const { client, message } = context
        client.send( calculator.minus( message.leftOperand, message.rightOperand ) )
    })
    client.events.calculator.divide.subscribe( (context) => {
        const { client, message } = context
        client.send( calculator.divide( message.leftOperand, message.rightOperand ) )
    })
    client.events.calculator.multiply.subscribe( (context) => {
        const { client, message } = context
        client.send( calculator.multiply( message.leftOperand, message.rightOperand ) )
    })
})