'use strict'

var express     = require('express');
var router      = express.Router();
var passport    = require("passport");


//Reference to individual controller files
var staticsController   = require('../controllers/staticsController');
var usersController     = require('../controllers/usersController');
var productsController  = require('../controllers/productsController');
var salesController     = require('../controllers/salesController');
var stocksController    = require('../controllers/stocksController');


function authenticatedUser(req, res, next){
    if (req.isAuthenticated()) return next();
    req.flash('errorMessage', "Login to access");
    res.redirect('/login');
}

/*
 * Note: Please place the routes for a particular controller
 * under its corresponding section below
 */

//=============== API Routes to Users Controller ========================


//=============== API Routes to Products Controller ========================

router.route('/api/products')
    .get(productsController.getAll)
    .post(productsController.create)

router.route('/api/products/:id')
    .get(productsController.getById)
    .put(productsController.updateProduct)
    .delete(productsController.deleteProduct)


//=============== API Routes to Sales Controller ===========================

router.route('/api/sales')
    .get(salesController.getAll)
    .post(salesController.createSale)

router.route('/api/sales/:id')
  .get(salesController.getSale)
  .put(salesController.updateSale)
  .delete(salesController.removeSale)

//=============== API Routes to Stocks Controller ==========================

router.route('/api/stocks')
    .get(stocksController.getAll)
    .post(stocksController.create)

router.route('/api/stocks/:id')
    .get(stocksController.getById)
    .put(stocksController.updateById)
    .delete(stocksController.deleteById)


//=============== Routes for Json Web Token (To be implemented)=============



//================ End of Routes =======================================



module.exports = router
