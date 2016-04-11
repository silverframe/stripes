var mongoose = require('mongoose');
var Product = mongoose.model('Product', productSchema);

var salesOrderSchema = new mongoose.Schema({
    orderNo:        { type: Number},
    customerName:   { type: String },
    customerEmail:  { type : String},
    date:           { type: Date, default: Date.now },
    salesTotal:     { type: Number },
    items :         [
      {
        product: {type: Schema.Types.ObjectId, ref: 'Product'},
        qty: Number
      }
    ]
});

module.exports = mongoose.model('SalesOrder', salesOrderSchema);
