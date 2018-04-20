const glob = require('glob')
const arrayHelper = require('./utils/array')

const application = {}

/* This module is responsible for préloading application modules and checking for dependencies. */

application.loadModules = () => {
    glob('./src/modules/**/*', (err, result) => {
        console.log('Preloading modules, this will allow them to bind to events')
        if(err){
            console.log('An error occured while pre-loading modules:')
            console.log(err)
            return
        }
        const modules = result.filter((e) => { return e.endsWith('.service.js') }).map( (p) => { return p.replace('./src/modules/', '../modules/') } )
        console.log(modules.length + ' modules found:')
        console.log(modules)
        modules.forEach(require)
        console.log('Modules preloading stage finished')
    })
}

module.exports = application