const mongoose = require('mongoose')

const uri = process.env.MONGO_URI

mongoose.connect(uri, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to database MONGODB'))


db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;