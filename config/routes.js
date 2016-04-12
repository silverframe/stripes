'use strict'

var express     = require('express');
var router      = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var passport    = require("passport");
var methodOverride = require('method-override'); //used to manipulate POST


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

//=============== Routes to Statics Controller ==========================
router.route('/')
    .get(staticsController.home)

//=============== Routes to Users Controller ========================
router.route('/secret')
    .get(authenticatedUser, usersController.getSecret)

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route('/logout')
  .get(usersController.getLogout)

//=============== Routes to Products Controller ==========================
router.route('/products')
    .get(productsController.getAll)
    .post(productsController.create)


router.route('/products/new')
    .get(productsController.newProduct)

router.route('/products/:id')
    .get(productsController.editProduct)
    .patch(productsController.updateProduct)
    .delete(productsController.deleteProduct)

//=============== Routes to Sales Controller ===========================

router.route('/sales')
    .get(salesController.getAll)
    .post(salesController.createSale)
router.route('/sales/:id')
  .get(salesController.getSale)
  .patch(salesController.updateSale)
  .delete(salesController.removeSale)
//=============== Routes to Stocks Controller ==========================
router.route('/stock_adjustment')
    .get(stocksController.getAll)
    .post(stocksController.create)

router.route('/stock_adjustment/new')
    .get(stocksController.getNew)


router.route('/stock_adjustment/:id')
    // only get request and no patch or delete request for inventory security
    // can consider allowing it later for certain users (supervisor)
    .get(stocksController.getById)



//================ End of Routes =======================================



module.exports = router
