var mongoose = require('mongoose');

var transferSchema = {
	tid: {					// Transfer ID
		type: String
	},
	vid: {					// Vehicle ID
		type: String
	},
	did: {					// Driver ID
		type: String
	},
	uids: {					// User IDs array
		type: [String]
	},
	sids: {					// Stretch IDs array
		type: [String]
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
	smallBaggages: {
		type: Number
	},
	largeBaggages: {
		type: Number
    },
    destinationAirport: {   // IATA code
        type: String
    },
    estimatedDurationInHours: {
        type: String
    }
};

module.exports = new mongoose.Schema(transferSchema);
module.exports.transferSchema = transferSchema;
