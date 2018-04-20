/* This module is responsible for providing an instance of dynamo client */
const AWS = require('aws-sdk')
const config = require('../../configurationsManager')
console.log('Dynamo configuration:')
console.log(config.read('dynamo'))
AWS.config.update(config.read('dynamo'))
const ddb = new AWS.DynamoDB.DocumentClient()

module.exports = {
    getInstance : () => {
        return ddb
    }
}