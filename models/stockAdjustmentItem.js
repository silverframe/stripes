var mongoose = require('mongoose');

var StockAdjustmentItemSchema = new mongoose.Schema({
  product:      { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  costPrice:   { type: Number, required: true },
  qtyChange: 	{ type: Number, required: true }
});

var StockAdjustmentItem = mongoose.model('StockAdjustmentItem', StockAdjustmentItemSchema);

module.exports = StockAdjustmentItem;
