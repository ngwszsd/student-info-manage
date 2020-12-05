const getRouter = require('router')
const router = getRouter()
const Student = require('../model/user')
const template = require('art-template')
const querystring = require('querystring');

router.get('/add', (req, res) => {
    let html = template('index.art', {})
    res.end(html)
})
router.get('/', (req, res) => {
    let html = template('index.art', {})
    res.end(html)
})
router.get('/list', async(req, res) => {
    let students = await Student.find()
    console.log(students);
    let html = template('list.art', {
        students: students
    })
    res.end(html)
})
router.post('/add', (req, res) => {
    let formDate = ''
    req.on('data', param => {
        formDate += param
    })
    req.on('end', async() => {
        await Student.create(querystring.parse(formDate))
        res.writeHead(301, {
            Location: '/list'
        })
        res.end()
    })
})
module.exports = router