var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var salesOrderItem = require('./salesOrderItem')

var SalesOrderSchema = new Schema({
    orderNo:        { type: Number },
    customerName:   { type: String },
    customerEmail:  { type : String },
    itemList:       [salesOrderItem.schema],
    createdDate:    { type: Date, default: Date.now },
    // itemList :     [
    //   {
    //     product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    //     qty: Number
    //   } ]

});

module.exports = mongoose.model('SalesOrder', SalesOrderSchema);
