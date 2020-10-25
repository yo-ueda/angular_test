const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const ObjectId = Schema.ObjectId

const ProductSchema = new Schema({
  //author: ObjectId,
  name: {type:String,required:true,max:[60,'最大60文字までです']},
  weight: String,
  coverImage: String
})

module.exports = mongoose.model('product',ProductSchema)
