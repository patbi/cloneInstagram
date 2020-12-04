const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

dotenv.config({path : './config/config.env'})

require('./models/user');

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
	console.log(`server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});