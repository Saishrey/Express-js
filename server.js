const express = require('express')
const app = express()
port = 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
// app.use(logger)

// app.get('/', logger, (req, res) => {
//     res.render('index', { text: 'Hello World' })
// })

app.get('/', (req, res) => {
    res.render('index', { text: 'Hello World' })
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(`http://localhost:${port}`)
})