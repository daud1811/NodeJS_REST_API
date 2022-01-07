const productCtrl = require('../controllers/productController')
const express = require('express')
const router = express.Router()

router.get('/allProductsList', productCtrl.getAll)             //to fetch all products
router.get('/:id', productCtrl.getById)         //to fetch a product by Id
router.post('/addproduct', productCtrl.create)            //to create a new product
router.put('/edit/:id', productCtrl.update)          //to update a product by Id
router.delete('/delete/:id', productCtrl.delete)       //to delete a product by Id


module.exports = router