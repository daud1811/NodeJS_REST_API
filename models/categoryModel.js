const mongoose = require('mongoose');
const Schema = mongoose.Schema

let categorySchema = new Schema({
    categoryName: { type: String },
    products:[{ type: Schema.Types.ObjectId,
    ref:'Product'}]

})

module.exports = mongoose.model('Category', categorySchema)