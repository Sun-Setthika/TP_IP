// import mongoose from 'mongoose';
// const  Schema  = mongoose.Schema;

const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
      },
    firstname: {
        type: String,
        unique: true,
        required: true
    },
    lastname: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

var User =  mongoose.model('User', userSchema);
module.exports = User;