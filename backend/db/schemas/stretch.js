var mongoose = require('mongoose');

var stretchSchema = {
	sid: {					// Stretch ID
		type: String
	},
	uid: {					// User ID
		type: String
	},
	vid: {					// Vehicle ID
		type: String
	},
	did: {					// Driver ID
		type: String
	},
	distance: {
		type: Number
	},
	departureTimestamp: {
		type: Date
	},
	departureLatitude: {
		type: String
	},
	departureLongitude: {
		type: String
	},
	arrivalTimestamp: {
		type: Date
	},
	arrivalLatitude: {
		type: String
	},
	arrivalLongitude: {
		type: String
	},
	pickupPassenger: {
		type: String
	},
	smallBaggages: {
		type: Number
	},
	largeBaggages: {
		type: Number
	}
};

/*
// fare getter
stretchSchema.path('fare').get(function(num) {
	return (num / 100).toFixed(2);
});

// fare setter
stretchSchema.path('fare').set(function(num) {
	return num * 100;
});

// balance getter
stretchSchema.path('balance').get(function(num) {
	return (num / 100).toFixed(2);
});

// balance setter
stretchSchema.path('balance').set(function(num) {
	return num * 100;
});
*/
module.exports = new mongoose.Schema(stretchSchema);
module.exports.stretchSchema = stretchSchema;
