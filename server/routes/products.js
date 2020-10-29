const express = require('express')
const router = express.Router()
const Product = require('../model/product')


router.get('', function( req, res) {
  Product.find({}, function(err, foundProduct){
    return res.json(foundProduct)
  })
})

router.get('/:productId', function( req, res) {
  const productId = req.params.productId
  Product.findById(productId, function(err, foundProduct){
    if(err){
      return res.status(422).send({errors: [{title:'error',detail:'product not found!!!'}]})
    }
    return res.json(foundProduct)
  })
})

module.exports = router
