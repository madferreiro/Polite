const fs = require('fs')
const JSON_FILE_PATH = './configurations.json'
let configurations = {}

console.log('Starting configuration manager module with config key:' + process.env.config)
if(typeof process.env.config !== 'string')
  process.env.config = "dev" //defaults to dev

if (fs.existsSync(JSON_FILE_PATH)) {
  configurations = JSON.parse(fs.readFileSync(JSON_FILE_PATH));
} else {
    console.log('ERROR: unable to load configurations, check if file exist and is on the right folder.')
}

const toNamespaceArray = (namespaceString) => {
  return [ process.env.config ].concat(namespaceString.split('/'))
}

const doRead = (configurations, namespace) => {
  if(typeof configurations === 'undefined')//No more configurations on this namespace, interrupt search
    return;
  const target = namespace.shift()
  if(typeof configurations[target] === 'string')//found configuration
    return configurations[target]
  if(namespace.length === 0)//Last namespace partition found, return result
    return configurations[target]
  return doRead(configurations[target], namespace)//keep reading
}

// ex: read('arApi/endpoint') >>> returns "http://api.dev.autorei.net/"
module.exports = {
    read : (namespace) => {
        let setting = doRead(configurations, toNamespaceArray(namespace))
        if(typeof process.env[namespace] !== 'undefined') // env configuration override setting
          setting = process.env[namespace]
        return setting
      }
}