const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, enum: ['car', 'bike'], required: true },
  year: { type: Number, required: true },
  pricePerDay: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
  description: { type: String }
}, { timestamps: true });

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;