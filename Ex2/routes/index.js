var express = require('express');
var router = express.Router();

const { login } = require('../services/login');
const { register } = require('../services/register')
const { joiValidation } = require('../middleware/joiValidation');
const { loginSchema, registerSchema } = require('../schemas/index')


router.get('/', function(req,res,next) {
    console.log("router up");
    res.send("Hello, this is API");
});

router.post('/login', joiValidation(loginSchema) ,async function(req,res,next) {
    const param = JSON.parse(req.body);
    const {email, password} = param;
    const result = await login(email, password);
    res.json(result);
});

router.post('/register', joiValidation(registerSchema), async function(req,res,next) {
    const param = JSON.parse(req.body);
    const result = await register(param);
    res.json(result);
});

module.exports = router;