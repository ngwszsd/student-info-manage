const http = require('http')

const template = require('art-template')
const path = require('path')
const serveStatic = require('serve-static')
const dateformat = require('dateformat')
const router = require('./route/index')
const serve = serveStatic(path.join(__dirname, 'public'))


template.defaults.root = path.join(__dirname, 'views')
template.defaults.imports.dateformat = dateformat


require('./model/connect')
const app = http.createServer()
app.on('request', (req, res) => {
    // res.end('rukou')
    router(req, res, () => {
        //console.log('no:3');
    })
    serve(req, res, () => {})
})
app.listen(3000)
console.log('http://localhost:3000')