var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    sku:          {type: String, required: true, unique: true},
    name:         {type: String, required: true},
    description:  String,
    supplier:     String,
    productType:  {type: String, required: true},
    brand:        String,
    tags:         String,
    quantity:     {type: Number, required: true},
    active:       {type: Boolean, required: true},
    costPrice:    {type: Number, required: true},
    previousCost: {type: Number, required: true},
    sellingPrice: {type: Number, required: true},
    created:      {type: Date, default: Date.now},
    updated:      {type: Date, default: Date.now},
    imageUrl:     String
});

module.exports = mongoose.model('Product', ProductSchema);
