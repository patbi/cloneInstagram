const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
	name:
	{
		type: String,
		required : [true, 'Please enter your name']
	},

	email:
	{
		type: String,
		required : [true, 'Please enter your email address'],
		unique : true,
		validate : [validator.isEmail, 'Please enter valid email address']
	},

	password:
	{
		type: String,
		required : [true, 'Please enter password for your account'],
		minlength : [8, 'Your password must be at least 8 characters long'],
		select : false
	}
})

module.exports = mongoose.model("User", userSchema);