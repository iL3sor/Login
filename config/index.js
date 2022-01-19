const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/login")
        console.log('successful connect')
    } catch (error) {
        console.log('failed')
        throw error
    }
}
module.exports = {connect};