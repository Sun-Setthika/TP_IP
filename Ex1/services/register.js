// const { readUsers, writeUsers } = require('../db/db')
const User = require('../model/User');
const {encryptData} = require('../configs/bcrypt')

const register = async (params) => {
  const { email, username, firstname, lastname, password } =  params;
  try {
    // check if email existed
    const existed = await User.findOne({ email })
    if (existed) {
      throw "User is already existed~";
    }

    var hash = encryptData(password);

    // create a new user
    const newUser = {
      email,
      username,
      firstname,
      lastname,
      password: hash
    }
    const createdUser = await User.create(newUser)

    // Save the new user to the database
    const saveUser = await createdUser.save();

    // users.push(newUser);

    // Insert to db
    // writeUsers(users);

    return {
      success: true,
      data: newUser
    }
  } catch (err) {
    return {
      success: false,
      error: err || 'Unknown error occurred'
    }
  }
}

module.exports = {
  register
}