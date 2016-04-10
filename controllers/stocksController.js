'use strict'

//GET /api/stocks
function getAll(req, res) {
    //var result = candy.all();
    //res.status(200).json(result.value);
    res.send('Get all Produc stock levels')
}

//POST /api/stocks
function create(req, res) {
    //var result = candy.create(req.body.name,req.body.color);
    //res.status(200).json(result.value);
    res.send('Create stock ??? Is this valid?')
}

//GET /api/stocks/:id
function getById(req, res) {
    //var result = candy.show(req.params.id);
    //res.status(200).json(result.value);
    res.send('Get stock level by product id??')
}

//PUT /api/stocks/:id
function updateById(req, res) {
    //var result = candy.update(req.params.id,req.body.name,req.body.color);
    //res.status(200).json(result.value);
    res.send('Update stock level by product id')
}

//DELETE /api/stocks/:id
function deleteById(req, res) {
    //var result = candy.destroy(req.params.id);
    //res.status(200).json(result.value);
    res.send('Delete stock level by product id?? Is this valid')
}

module.exports = {
  getAll:       getAll,
  create:       create,
  getById:      getById,
  updateById:   updateById,
  deleteById:    deleteById
}