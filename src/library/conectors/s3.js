/* This module is responsible for providing an instance of S3 client */
var s3 = require('s3')
console.log('S3 configuration:')
console.log(config.read('s3'))
var client = s3.createClient(config.read('s3'))
module.exports = {
    getInstance : () => {
        return client
    }
}