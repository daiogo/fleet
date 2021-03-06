var mongoose = require('mongoose');

var userSchema = {
	uid: {
		type: String,
		required: true
	},
	balance: {
		type: Number
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	},
	phone: {
		type: String
	},
	headline: {
		type: String
	},
	rating: {
		type: Number
	},
	interests: {
		type: [String]
	},
	linkedin: {
		type: String
	},
	facebook: {
		type: String
	}
};

module.exports = new mongoose.Schema(userSchema);
module.exports.userSchema = userSchema;
