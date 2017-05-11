var mongoose = require('mongoose');

var ShirtSchema = new mongoose.Schema({
	username: { type: String },
	price: { type: Double, default: 500.0 },
	name: { type: String, default: 'unnamed' },
	gender: { type: String },
	canvasImage: { type: String }, // stored as base64 data which is in string format
	defaultImage: { type: String } // same as above :p
});

mongoose.model('Shirt', ShirtSchema);