var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var salesOrderItems = require('./salesOrderItems')

var SalesOrderSchema = new Schema({
    orderNo:        { type: Number },
    customerName:   { type: String },
    customerEmail:  { type : String },
    itemList:       [salesOrderItems.schema],
    createdDate:    { type: Date, default: Date.now },
    // itemList :     [
    //   {
    //     product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    //     qty: Number
    //   } ]

});

module.exports = mongoose.model('SalesOrder', SalesOrderSchema);
