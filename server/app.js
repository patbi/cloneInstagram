const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const db = require('./keys').mongoURI;


// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.listen(PORT, () => {
	console.log("server is running on", PORT)
})