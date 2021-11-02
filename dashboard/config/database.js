const mongoose = require('mongoose')


const connectDatabase = () => {
    mongoose.connect("mongodb+srv://Ashu:hdytto@cluster0.pzxm1.mongodb.net/Dashboard?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true }).then((data) => {
        console.log(`mogo connected: ${data.connection.host}`)
    
    })
}
module.exports = connectDatabase