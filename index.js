const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const cors = require('cors');

const app = express();
connectDB();


app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`)})