const Products = require("../models/products")

var mongoose = require('mongoose');
const { error, message } = require("../schemas/signUp");

const findById = async (id) => {
  try{
    const product = await Products.findById(id)
    return {
      sucess : true,
      data: product
    }
  }catch(err){
    return{
      sucess: false,
      error: err.message
    }
  }
  

//   const products = await Products.aggregate([
//     {
//       "$match": {
//         _id: mongoose.Types.ObjectId(id),
//       }
//     },
//     {
//       $lookup: {
//         from: "prices",
//         localField: "_id",
//         foreignField: "product",
//         as: "prices"
//       }
//     }
//   ])

//   if (!products?.length)
//     return null

//   return products[0]
// }

// const findAll = async () => {
//   const products = await Products.aggregate([
//     {
//       $lookup: {
//         from: "prices",
//         localField: "_id",
//         foreignField: "product",
//         as: "prices"
//       }
//     }
//   ])

//   if (!products?.length)
//     return []

//   return products
}

const findAll = async (category, item) => {
  const products = await Products.aggregate([
    {
      $match: {
        category: mongoose.Types.ObjectId(category),
        item: mongoose.Types.ObjectId(item),
      },
    },
    {
      $lookup: {
        from: "prices",
        localField: "_id",
        foreignField: "product",
        as: "prices"
      }
    },
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "product",
        as: "category"
      }
    },
    {
      $lookup: {
        from: "items",
        localField: "item",
        foreignField: "product",
        as: "item"
      },
    },
  ])

  if (!products?.length)
    return []

  return products
}



const create = async (newProduct) => {
  try{
    const createdProduct = await Products.create(newProduct);
    return{
      sucess: true,
      data: createdProduct
    }
  }catch(err){
    return{
      sucess: false,
      error: err.message
    }
   
  }
}

const update = async (id, newProduct) => {
  // to do
  try{
    const product = await Products.findById(id)
    product.title = newProduct.title
    product.category = newProduct.category
    product.item = newProduct.item
    product.user = newProduct.user
    product.desc = newProduct.desc
    product.imageUrl = newProduct.imageUrl

    await product.save()
    return{
      sucess: true,
      data: product
    }

  }catch(err){
    return{
      sucess: false,
      error: err.message
    }
  }
}

const remove = async (id) => {
  // to doF
  try{
    await Products.deleteOne({id:id})
    return{
      sucess: true,
      data: "delete sucessfully"
    }

  }catch(err){
    return{
      sucess: false,
      error: err.message
    }
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}