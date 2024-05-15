const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('Users list')
})

router.get('/new', (req, res) => {
    // res.render('users/new', { firstName: 'Shane' })
    res.render('users/new')
})

router.post('/', (req, res) => {
    const isValid = false
    if(isValid) {
        users.push({name: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error')
        res.render('users/new', { firstName: req.body.firstName })
    }
    console.log(req.body.firstName)
    res.send('Create user')
})


router
.route('/:id')
.get((req, res) => {
    console.log(req.user)
    res.send(`Get user: ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Get user: ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Get user: ${req.params.id}`)
})

const users = [
    { name: 'John' },
    { name: 'Mary' },
    { name: 'Bob' }
]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
}

module.exports = router