var express = require('express');
var router = express.Router();
const { login } = require('../services/login')
const { register } = require('../services/register')
const { joiValidation } = require('../middleware/joiValidation')
const { loginSchema,registerSchema} = require('../schemas/index')

router.get('/', function (req, res, next) {
  console.log("Router Working");
  res.send("Hello From APIs");
})

router.post('/login',joiValidation(loginSchema), async (req, res, next) => {
  try{
  const { email, password } = req.body;
  const result = await login(email, password);
  res.json(result);
  } catch (err){
    res.status(500).json({ success: false, error: err || 'Error' });
  }
})

router.post('/register', joiValidation(registerSchema), async (req, res, next) => {
  try {
    const createdUser = await register(req.body);
    res.json(createdUser);
  } catch (err) {
    res.status(500).json({ success: false, error: err || 'Error' });
  }
});


module.exports = router