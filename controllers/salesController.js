'use strict'

var Sale = require('../models/salesOrder');

// GET
function getAll(request, response){
 Sale.find((error, sale) => {
   if (error){
     var res = {message: 'Sale not found'};
     response.json(res);
     return;
   }
   response.render('layout', {sales: sales});
 });
}

// POST
function createSale(request, response) {

  var sale = new Sale();

  sale.save(err=> {
    if(err) return response.json({message:"could not create sale"});
    response.redirect('/sale');
  });
  }

// GET
function getSale(request, response) {
  var id = request.params.id;

  Sale.findById({_id: id}, function(error, sale) {
    if(error) response.json({message: 'Could not find sale b/c:' + error});

    response.render('show', {sales: sales});
  });
}

function updateSale(request, response) {
  var id = request.params.id;

  Sale.findById({_id: id}, function(error, sale) {
    if(error) response.json({message: 'Could not find sale b/c:' + error});

    if(request.body.name) sale.name = request.body.name;
    if(request.body.color) sale.color = request.body.color;

    sale.save(function(error) {
      if(error) response.json({messsage: 'Could not update sale b/c:' + error});

      response.json({message: 'Sales Order successfully updated'});
    });
  });
}

function removeSale(request, response) {
  var id = request.params.id;

  Sale.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete sales order b/c:' + error});

    response.json({message: 'Sales Order successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createSale: createSale,
  getSale: getSale,
  updateSale: updateSale,
  removeSale: removeSale
}
