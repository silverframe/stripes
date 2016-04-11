var mongoose = require('mongoose');

var StockAdjustmentItem = mongoose.model('StockAdjustmentItem');

var StockAdjustmentSchema = new mongoose.Schema({
  reason:           { type: String, required: true},
  user:        	  	{ type: Schema.Types.ObjectId, ref: 'User', required: true },
  adjustmentList:   [{ type: StockAdjustmentItem.schema, required: true} ],
  notes: 		  	    String,
  createdDate:      { type: Date, default: Date.now },
  updatedDate:      { type: Date, default: Date.now }
});

var StockAdjustment = mongoose.model('StockAdjustment', StockAdjustmentSchema);

module.exports = StockAdjustment;
