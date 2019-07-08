require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const bodyParser = require('body-parser')

const userRouter = require('./routes/auth/')
const { port, domain } = require('./utils/config')

// Config
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({ resave: true, saveUninitialized: true,  secret: 'tajna' }))

// Routes
app.use('/auth', userRouter)
app.get('/', (req, res) => res.send('Dobrodosli na Koderski-Zadaci-API!'))

//Server
app.listen(port, () => console.log(`Server started at: ${domain}`)
)