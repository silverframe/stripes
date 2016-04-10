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

//=============== Routes to Statics Controller ==========================
router.route('/')
    .get(staticsController.home)


//---------------- Serve Product static pages-----------------------

//Example use express to serve a static html file (Other method is to use the public folder)
router.route('/pages')
    .get(staticsController.test)


//---------------- Serve Sales static pages-------------------------





//---------------- Serve Stock static pages-------------------------






//=============== API Routes to Users Controller ========================
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


//=============== API Routes to Products Controller ========================

router.route('/api/products')
    .get(productsController.getAll)
    .post(productsController.create)

router.route('/api/products/:id')
    .get(productsController.getById)
    .put(productsController.updateById)
    .delete(productsController.deleteById)


//=============== API Routes to Sales Controller ===========================

router.route('/api/sales')
    .get(salesController.getAll)
    .post(salesController.create)

router.route('/api/sales/:id')
    .get(salesController.getById)
    .put(salesController.updateById)
    .delete(salesController.deleteById)


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