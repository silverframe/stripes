var Product = require('../models/product');

//GET /api/products
function getAll(request, response) {
// ============================== JWT MiddleWare ========================

// fun fact: if you console.log a string and concatenate it with the user -> you wont be able to inspect the full object
// JWT middleware decodes the token and adds the token info into request as user property
// console.log("THIS CONSOLE LOG: " + request.user)
  console.log("LOOK HERE")
  console.log(request.user)
  console.log(request.hostname)
  // if request of website url is not equal to what user saved it as do not allow.
  if (request.user === request.hostname ) {
    console.log("it works")

  } else {
    console.log("keep trying")
    // ask him to bugger off
  }

// ============================== End of JWT MiddleWare =================

  //TODO: Please filter away all inactive products before return json

  console.log("test")
  Product.find( (error, products) => {
    if (error) {
      var res = {
        message: 'Product Not Found'
      }
      response.json(res)
      return
    }
    console.log(products);
    response.json(products);
  })
}

function showProduct(req, res) {
  var id = req.params.id;
  Product.findById({_id: id}, function(error, product) {

    if(error) res.json({message: 'Could not find product b/c:' + error});
    console.log(id);
    console.log(product);
    res.render('products/edit', {product: product});
  });

}

module.exports = {
  getAll:       getAll,
  showProduct:  showProduct
}
