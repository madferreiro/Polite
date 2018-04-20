/* This module is responsible for providing an instance of elastic search client */
var elasticsearch = require('elasticsearch')
console.log('Elastic Search configuration:')
console.log(config.read('elasticSearch'))
var client = new elasticsearch.Client(config.read('elasticSearch'))

module.exports = {
    getInstance : () => {
        return client
    }
}