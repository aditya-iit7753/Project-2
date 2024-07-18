const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/inventory', inventoryRoutes);

// Connect to database and start server
db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
  app.listen(5000, () => {
    console.log('Server started on port 5000');
  });
});
