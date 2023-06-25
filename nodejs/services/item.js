const Items = require("../models/items");

const findById = async (id) => {
  try {
    const item = await Items.findById(id)
    return {
      success: true,
      data: item
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const findAll = async () => {
  // to do
  try{
    const item = await Items.findAll();
    return{
      success : true,
      data :  item
    }
    
  }catch(err){
    return{
      success : false,
      err: err.message
    }
  }
}

const create = async (newItem) => {
  try{
    const createdItem = await Items.create(newItem);
    return {
      success : true, 
      data : createdItem
    }

  }catch(err){
    return{
      sucess : false, 
      err : err.message
    }
  }
  // const createdItem = await Items.create(newItem);

  // return createdItem;
}

const update = async (item_id, newItem) => {
  // to do
  try{
    const item = await Items.findById(item_id)
    item.name = newItem.name
    item.category = newItem.category
    item.desc = newItem.desc
    await item.save()
    
    return{
      sucess : true,
      data : item
    }
  }catch(err){
    return{
      sucess : false,
      err : err.message
    }
  }
}

const remove = async (item_id) => {
  // to do
  try{
    await Items.deleteOne({ _id:item_id})
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
}