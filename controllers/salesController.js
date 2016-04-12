'use strict'

var SalesOrder = require('../models/salesOrder')

// GET
function getAll(request, response){
 SalesOrder.find((error, sales) => {
   console.log(sales);

   if (error){
     var res = {message: 'Sale not found'};
     response.json(res);
     return;
   }

   response.render('sales/index', {sales: sales});

 });
}

function getNew(req, res) {
    // we may need to pass in the user object
    res.render('sales/new');
}

// POST
function createSale(request, response) {

  var sale = new SalesOrder();

  sale.save(err=> {
    if(err) return response.json({message:"could not create sale"});
    response.redirect('/sales');
  });
  }

// GET
function getSale(request, response) {
  var id = request.params.id;

  SalesOrder.findById({_id: id}, function(error, salesOrder) {
    if(error) response.json({message: 'Could not find sale b/c:' + error});
    response.render('sales/show', {salesOrder: salesOrder});
  });
}

function updateSale(request, response) {
  var id = request.params.id;

  SalesOrder.findById({_id: id}, function(error, sale) {
    if(error) response.json({message: 'Could not find sale b/c:' + error});

    sale.save(function(error) {
      if(error) response.json({messsage: 'Could not update sale b/c:' + error});

      response.json({message: 'Sale successfully updated'});
    });
  });
}

function removeSale(request, response) {
  var id = request.params.id;

  SalesOrder.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete sales order b/c:' + error});

    response.redirect('/sales');
  });
}

module.exports = {
  getAll: getAll,
  getNew: getNew,
  getSale: getSale,
  createSale: createSale,
  updateSale: updateSale,
  removeSale: removeSale
}
