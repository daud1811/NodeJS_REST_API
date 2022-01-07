const category = require('../models/categoryModel')

//Method to fetch all categories
exports.getAll = async (req, res) => {
    try {
        let cat = await category.find().populate('products')
        res.status(200).json(cat)
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.message });
    }

}

//Method to fetch a category by Id
exports.getById = async (req, res) => {
    try {
        let cat = await category.findById(req.params.id)
        res.status(200).json(cat)
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.message });
    }
}

//Method to create a new category and save to database
exports.create = async (req, res) => { 
    try {
        let newCat = new category({
           categoryName:req.body.categoryName,
           products:[] 
        })
        await newCat.save()
        res.status(201).json(newCat)
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.message });
    }

}

//Method to update an existing category and save to database
exports.update = async (req, res) => {
    try {
        let cat = await category.findOneAndUpdate(req.params.id, {$push:{products:req.body.productId}}, {new:true})
        
        await cat.save()
        res.status(201).json(newCat)
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.message });
    }

}

//Method to delete a category
exports.delete = async (req, res) => {
    try {
        let cat = await category.findByIdAndRemove(req.params.id)
        res.json(cat)
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.message });
    }

}