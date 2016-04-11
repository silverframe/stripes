var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salesOrderSchema = new Schema({
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
