const express = require('express')
const app = express()
const errorMiddleware = require('./middleware/error')
const dotenv = require('dotenv')

dotenv.config({path:'dashboard/config/config.env'})

app.use(express.json())

const product = require('./routes/productRoute')
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")

app.use('/api/v1', product)
app.use("/api/v1", user)
app.use("/api/v1", order)

app.use(errorMiddleware)

module.exports = app