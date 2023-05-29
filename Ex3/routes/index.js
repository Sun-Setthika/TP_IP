var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const { login } = require('../services/login')
const { register } = require('../services/register')
const { logout } = require('../services/logout')
const { getUser } = require('../services/getUser')
const { joiValidation } = require('../middleware/joiValidation')
const { loginSchema,registerSchema} = require('../schemas/index')
const {ensureSignedIn, ensureSignedOut} = require('../middleware/auth');

router.get('/', function (req, res, next) {
  console.log("Router Working");
  res.send("Hello From APIs");
})

router.post('/login', ensureSignedOut, joiValidation(loginSchema), async (req, res, next) => {
  
  const { email, password } = req.body;
  const result = await login(email, password);
  const token = jwt.sign(param, "t0kenEncrypti0n");
  req.session.jwtToken = token;
  res.json(result);
})

router.post('/register',ensureSignedOut, joiValidation(registerSchema), async (req, res, next) => {
  
    const createdUser = await register(req.body);
    res.json(createdUser);
 
})

router.post('/logout', ensureSignedIn, function(req, res, next){
  const result = logout(req.session);
  console.log("cookie", req.cookies);
  res.clearCookie('token')
  res.json(result);
})
//get user by id
router.get('/user/:id', ensureSignedIn, async function(req, res, next){
  var userId = req.path.split("/user/")[1]
  result = await getUser(userId)
  return res.json(result)
})
module.exports = router