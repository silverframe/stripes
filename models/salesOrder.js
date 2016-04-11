var mongoose = require('mongoose');
var Product = mongoose.model('Product', productSchema);

var salesOrderSchema = new mongoose.Schema({
    orderNo:        { type: Number },
    customerName:   { type: String },
    customerEmail:  { type : String },
    date:           { type: Date, default: Date.now },
    salesTotal:     { type: Number },
    itemList :     [
      {
        product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
        qty: Number
      }
    ]
});

module.exports = mongoose.model('SalesOrder', salesOrderSchema);
