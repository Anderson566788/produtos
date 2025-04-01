const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    modelo: {
        type: String,
        require: true
    },

    marca: {
        type: String,
        require: true
    },

    valor: {
        type: Number
    }
})

const productModel = mongoose.model('Product', productSchema)
module.exports = productModel