'use strict'

var Sales = require('../models/salesOrder')

//GET /api/sales
function getAll(req, res) {
    //var result = sales.all();
    //res.status(200).json(result.value);
  res.send('Get all Sales')
}

//POST /api/sales
function create(req, res) {
    //var result = sales.create(req.body.name,req.body.color);
    //res.status(200).json(result.value);
    res.send('Create Sale')
}

//GET /api/sales/:id
function getById(req, res) {
    //var result = sales.show(req.params.id);
    //res.status(200).json(result.value);
    res.send('Get Sale by id')
}

//PUT /api/sales/:id
function updateById(req, res) {
    //var result = sales.update(req.params.id,req.body.name,req.body.color);
    //res.status(200).json(result.value);
    res.send('Update Sale by id')
}

//DELETE /api/sales/:id
function deleteById(req, res) {
    //var result = sales.destroy(req.params.id);
    //res.status(200).json(result.value);
    res.send('Delete Sale by id')
}

module.exports = {
  getAll:       getAll,
  create:       create,
  getById:      getById,
  updateById:   updateById,
  deleteById:    deleteById
}
