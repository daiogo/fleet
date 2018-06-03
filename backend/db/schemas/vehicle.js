var mongoose = require('mongoose');

var vehicleSchema = {
	vid: {					// Vehicle ID
		type: String
	},
	did: {					// Driver ID
		type: String
	},
	licensePlate: {
		type: String
	},
	manufacturer: {
		type: String
	},
	model: {
		type: String
	},
	type: {
		type: String,
		required: true,
		match: /^(Hatch|Sedan|Wagon|SUV)$/
	}
};

module.exports = new mongoose.Schema(vehicleSchema);
module.exports.vehicleSchema = vehicleSchema;
