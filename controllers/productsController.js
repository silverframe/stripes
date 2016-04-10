'use strict'

//GET /api/products
function getAll(req, res) {
  //var result = candy.all();
  //res.status(200).json(result.value);
  res.send('Get all Products')
}

//POST /api/products
function create(req, res) {
    //var result = candy.create(req.body.name,req.body.color);
    //res.status(200).json(result.value);
    res.send('Create Product')
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
  getById:      getById,
  updateById:   updateById,
  deleteById:    deleteById
}