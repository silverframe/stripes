'use strict'
var mongoose = require('mongoose');
var Product = require('../models/product');
var StockAdjustmentItem = require('../models/stockAdjustmentItem')
var StockAdjustment = require('../models/stockAdjustment');
// var StockAdjustmentItem = mongoose.model('StockAdjustmentItem');
// var StockAdjustment = mongoose.model('StockAdjustment');

function getAll(req, res) {
    //var result = candy.all();
    //res.status(200).json(result.value);
    res.send('Get all Product stock levels')
}

function getNew(req, res) {
    // we may need to pass in the user object
    res.render('stocks/new');
}

function create(req, res) {
    // you want to create a new stock adjustment
    var stockAdjustment = new StockAdjustment();
    stockAdjustment.reason = req.body.reason;
    stockAdjustment.notes = req.body.notes;
    stockAdjustment.user = currentUser;
    // need to create an if else statement
    if ( Array.isArray(req.body.sku) ) {
      // Create stockAdjustmentItem before you can push it into stockAdjustment
      for (let i=0; i < req.body.sku.length; i++) {
          let qtyChange = req.body.qtyChange[i]
          //  old way to do this if we didnt have let
          // (function(qtyChange){
          Product.findOne( {'sku': req.body.sku[i]}, function( err, product){
              var stockAdjustmentItem = new StockAdjustmentItem({
              // It seems like you can either throw in the entire product object or just the product id as a value for the product key and mongoose will only store the database
              product:  product,
              qtyChange:  qtyChange
              });
              stockAdjustmentItem.save( function(err, item) {
                  // console.log('item save...');
                  stockAdjustment.adjustmentList.push(item)
                  // console.log("inside: " + i)
                  if (i === (req.body.sku.length - 1) ) {
                    stockAdjustment.save( function(err, x){
                      // console.log('stock save');
                    });
                  }
              });
          })
          // })();
      }
    } else {
        let qtyChange = req.body.qtyChange
        Product.findOne( {'sku': req.body.sku}, function( err, product){
            var stockAdjustmentItem = new StockAdjustmentItem({
            product:  product,
            qtyChange:  qtyChange
            });
            stockAdjustmentItem.save( function(err, item) {
                stockAdjustment.adjustmentList.push(item)
                stockAdjustment.save();
            });
        })
    }

    // if there is a error check whether user is logged in
    stockAdjustment.save( function(err) {
    if(err) return res.json({message: err.message});
    // putting a return is equivalent to an else
    res.redirect('/stock_adjustment')
    })
}

//GET /api/stocks/:id
function getById(req, res) {

    res.send('Get stock level by product id??')
}

//PUT /api/stocks/:id
function updateById(req, res) {
    //var result = candy.update(req.params.id,req.body.name,req.body.color);
    //res.status(200).json(result.value);
    res.send('Update stock level by product id')
}

//DELETE /api/stocks/:id
function deleteById(req, res) {
    //var result = candy.destroy(req.params.id);
    //res.status(200).json(result.value);
    res.send('Delete stock level by product id?? Is this valid')
}

module.exports = {
  getAll:       getAll,
  getNew:       getNew,
  create:       create,
  getById:      getById,
  updateById:   updateById,
  deleteById:    deleteById
}
