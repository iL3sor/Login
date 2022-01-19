const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect("mongodb+srv://il3sor:0823572165@cluster0.mkqi2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log('successful connect')
    } catch (error) {
        console.log('failed')
        throw error
    }
}
module.exports = {connect};
