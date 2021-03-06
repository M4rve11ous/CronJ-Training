const express = require('express')
const app = express()
const errorMiddleware = require('./middleware/error')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config({path:'dashboard/config/config.env'})

app.use(express.json())
app.use(cookieParser())

const product = require('./routes/productRoute')
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")

app.use('/api/v1', product)
app.use("/api/v1", user)
app.use("/api/v1", order)

app.use(errorMiddleware)

module.exports = app