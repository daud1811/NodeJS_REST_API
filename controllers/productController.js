const product = require('../models/productModel')
const cat = require('../models/categoryModel')


//Methods to fetch all products and their corresponding categories
exports.getAll = async (req, res) => {
    try {
        let data = await product.find().populate("categoryId");
        res.status(200).render('product', {items:data, publishableKey:publishableKey});
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.message });
    }
}

//Method to fetch product and its corresponding category
exports.getById = async (req, res) => {

    try {
        let productObj = await product.findById(req.params.id).populate("categoryId")
        res.status(200).json(productObj)
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.message });
    }
}

//method to update an existing product by its Id
exports.update = async (req, res) => {
    try {
        let productObj = await product.findByIdAndUpdate(req.params.id, req.body)
        let productObjUpdate = new product(req.body)
        await productObj.save()
        res.status(201).json(productObjUpdate)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.message })
    }

}
//method to create new product
exports.create = async (req, res) => {
    try {
        let productObj = new product(req.body)
        await productObj.save()
        res.status(201).json(productObj)
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.message })
    }

}

//Method to delete a product by its Id
exports.delete = async (req, res) => {
    try {
        let productObj = await product.findByIdAndRemove(req.params.id)
        res.json(productObj)
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.message })
    }

}