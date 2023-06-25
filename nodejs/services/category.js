
const Categories = require("../models/categories")

const findById = async (id) => {
  // to do
  try{
    const category = await Categories.findById(id)
    console.log(category);
    return{
      sucess : true,
      data: category
    }
  }catch (err){
    return {
      sucess : false,
      err : err.message
    }

  }
}

const findAll = async () => {
  // to do
  try{
    const categories = await Categories.find()
    return{
      success : true,
      data :  categories
    }
    
  }catch(err){
    return{
      success : false,
      err: err.message
    }
  }
}

const findCategorizedItems = async () => {
  return await Categories.aggregate([
    {
      $lookup: {
        from: "items",
        localField: "_id",
        foreignField: "category",
        as: "items"
      }
    },
    {
      $project: {
        _id: 1,
        name: 1,
        desc: 1,
        imageUrl: 1,
        items: {
          _id: 1,
          name: 1,
          category: 1,
          desc: 1,
        }
      }
    }
  ])
}

const create = async (params) => {
  // to do
  // const createdCate = await Categories.create(newCategory);
  try {
    const {name, desc, imageUrl } = params;

    const newCategory = {
      name,
      desc,
      imageUrl
    }

    const createdCategory = await Categories.create(newCategory);
    return {
      success: true,
      data: createdCategory
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: JSON.stringify(err) || 'error'
    }
  }

  // return createdCate;
}

const update = async (category_id, newCategory) => {
  // to do
  try{
    const category = await Categories.findById(category_id)
    category.name = newCategory.name
    category.desc = newCategory.desc
    category.imageUrl = newCategory.imageUrl
    await category.save()
    return{
      sucess : true,
      data : category
    }
  }catch(err){
    return{
      sucess : false,
      err : err.message
    }
  }
}

const remove = async (category_id) => {
  // to do
  try{
    await Categories.deleteOne({ _id:category_id})
    return{
      sucess : true,
      data : "deleted sucessfully"
    }
  }catch(err){
    return {
      sucess : false,
      err : err.message
    }
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create,
  findCategorizedItems
}