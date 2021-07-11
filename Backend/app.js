const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express()
const mongoose = require('mongoose')
const db = require('./config/mongoose');
const port = 3000;
app.use(express.json());
// const adminRoutes = require('./routes/adminRoutes');
// const userRoutes = require('./routes/userROutes')

app.listen(port,() => {
  console.log('App is running on port :::: ', port)
})
