// const { readUsers } = require("../db/db");
const User = require('../model/User');
const {decryptData} = require('../configs/bcrypt')

const login = async (email, password) => {

  try {
    // const users = readUsers();

    // check if email existed
    const existed = await User.findOne({ email })
    if (!existed)
      throw 'The email is not found~'

    // const user = users[index];
    
    if (!decryptData(password,existed.password)) {
      throw "The password is incorrect~"
    }

    return {
      success: true,
      data: existed
    }
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

module.exports = {
  login
}