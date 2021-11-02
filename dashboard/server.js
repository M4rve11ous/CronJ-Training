const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`)
    console.log(` Shutting Down The Server Due to uncaughtException`)
    process.exit(1)
})

dotenv.config({path:"dashboard/config/config.env"})

connectDatabase()






app.listen(process.env.PORT,() => {
    console.log(`server on http://localhost:${process.env.PORT}`)
})
// const server = app.listen(4000)

//Unhandled Promise Rejection
process.on("unhandledRejection",(err) => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting Down The Server Due to Unhandled Promise Rejection`)
    server.close(() => {
        process.exit(1)
    })
})