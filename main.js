require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080

const userRouter = require('./routes/auth/')

// Config
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use('/auth', userRouter)
app.get('/', (req, res) => res.send('Dobrodosli na Koderski-Zadaci-API!'))


//Server
app.listen(port, () => console.log(`Server started at port: ${port}`)
)