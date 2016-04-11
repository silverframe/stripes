'use strict'

var Sales = require('../models/salesOrder')

// GET
function getAll(request, response){
 Sale.find((error, sales) => {
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
  sale.name = request.body.name;
  sale.color = request.body.color;

  sale.save(err=> {
    if(err) return response.json({message:"could not create sale"});
    response.redirect('/sales');
  });
  }

// GET
function getSale(request, response) {
  var id = request.params.id;

  Sale.findById({_id: id}, function(error, sale) {
    if(error) response.json({message: 'Could not find sale b/c:' + error});

    response.render('show', {sale: sale});
  });
}

function updateSale(request, response) {
  var id = request.params.id;

  Sale.findById({_id: id}, function(error, sale) {
    if(error) response.json({message: 'Could not find sale b/c:' + error});

    sale.save(function(error) {
      if(error) response.json({messsage: 'Could not update sale b/c:' + error});

      response.json({message: 'Sale successfully updated'});
    });
  });
}

function removeSale(request, response) {
  var id = request.params.id;

  Sale.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete sale b/c:' + error});

    response.json({message: 'Sale successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createSale: createSale,
  getSale: getSale,
  updateSale: updateSale,
  removeSale: removeSale
}
