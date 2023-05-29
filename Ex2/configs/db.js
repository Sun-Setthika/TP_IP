//connect to mongodb
const mongoose = require('mongoose');

module.exports = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/tp9_ip');
        console.log('connected to MongoDB')
    } catch (err){
        console.log("Connection error", err)
    }
}
