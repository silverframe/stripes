var Product = require('../models/product');


//GET /api/products
function getAll(request, response) {
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
    response.render('products/products', {products: products})
  })
}

//POST /api/products
function create(req, res) {
    //var result = candy.create(req.body.name,req.body.color);
    //res.status(200).json(result.value);
    res.send('Create Product')
}

//GET /new
function newProduct(req, res) {
    res.render('products/new')
}

//GET /api/products/:id
function getById(req, res) {
    //var result = candy.show(req.params.id);
    //res.status(200).json(result.value);
    res.send('Get Product by id')
}

//PUT /api/products/:id
function updateById(req, res) {
  //var result = candy.update(req.params.id,req.body.name,req.body.color);
  //res.status(200).json(result.value);
    res.send('Update Product by id')
}

//DELETE /api/products/:id
function deleteById(req, res) {
  //var result = candy.destroy(req.params.id);
  //res.status(200).json(result.value);
    res.send('Delete Product by id')
}

module.exports = {
  getAll:       getAll,
  create:       create,
  newProduct:   newProduct,
  getById:      getById,
  updateById:   updateById,
  deleteById:    deleteById
}
