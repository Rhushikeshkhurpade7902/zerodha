const mongoose = require('mongoose'); // Import Mongoose directly

const HoldingsSchema = require('../schemas/HoldingsSchema'); // Import schema

const HoldingsModel = mongoose.model('Holding', HoldingsSchema); // Create model

module.exports = HoldingsModel; // Export the model
