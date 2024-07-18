const db = require('../config/db');

const Inventory = {
  getAll: (callback) => {
    db.query('SELECT * FROM inventory', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM inventory WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO inventory SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE inventory SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM inventory WHERE id = ?', [id], callback);
  }
};

module.exports = Inventory;
