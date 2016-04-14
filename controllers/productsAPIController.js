var Product = require('../models/product');

//GET /api/products
function getAll(request, response) {

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
