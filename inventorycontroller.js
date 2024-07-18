const Inventory = require('../models/Inventory');

exports.getAllItems = (req, res) => {
  Inventory.getAll((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

exports.getItemById = (req, res) => {
  Inventory.getById(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
};

exports.createItem = (req, res) => {
  Inventory.create(req.body, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
};

exports.updateItem = (req, res) => {
  Inventory.update(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
};

exports.deleteItem = (req, res) => {
  Inventory.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
};
