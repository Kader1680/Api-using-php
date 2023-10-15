const mongoose = require('mongoose');
const schema = mongoose.Schema

const ProductShema = new schema({
    Name : {type: String, required: true},
    Price : {type: Number, required: true}

})

// const product = mongoose.model('Name_of_collection', Name_of_schema)
const product = mongoose.model('product', ProductShema)

module.exports  = product