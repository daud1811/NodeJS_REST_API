const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: { type: String },
    qtyPerUnit: { type: String },
    unitPrice: { type: String },
    unitInStock: { type: String },
    discontinued: { type: Boolean },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

module.exports = mongoose.model('Product', productSchema)