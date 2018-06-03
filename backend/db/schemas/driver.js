var mongoose = require('mongoose');

var driverSchema = {
	did: {
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
	rating: {
		type: Number
	},
	languages: {
		type: [String]
	}
};

module.exports = new mongoose.Schema(driverSchema);
module.exports.driverSchema = driverSchema;
