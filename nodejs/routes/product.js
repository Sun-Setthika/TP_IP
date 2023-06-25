var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();

const productService = require('../services/product');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await productService.findById(id);
  res.json(result);
})

// all
router.get('/all/:category?/:item?', async (req, res) => {
  const {category, item} = req.params
  const result = await productService.findAll(category, item);
  res.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res,) => {
  const { title, category, item, price, user, imageUrl, desc, } = req.body;

  const result = await productService.create({
    title,
    category,
    item,
    price,
    user,
    imageUrl,
    desc,
  })
  res.json(result);
})

router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const newProduct = req.body
  const {id} = req.params
  const result = await productService.update(id, newProduct)
  res.json(result);
})

router.post('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const {id} = req.params
  const result = productService.remove(id)
  res.json(result);
})

module.exports = router