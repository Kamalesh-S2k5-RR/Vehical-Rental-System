const Vehicle = require('../models/vehicleModel');

// @desc    Get all vehicles
// @route   GET /api/vehicles
exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get a single vehicle by ID
// @route   GET /api/vehicles/:id
exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a new vehicle (ADMIN ONLY)
// @route   POST /api/vehicles
exports.createVehicle = async (req, res) => {
  const { make, model, type, year, pricePerDay, imageUrl, description } = req.body;

  try {
    const vehicle = new Vehicle({
      make,
      model,
      type,
      year,
      pricePerDay,
      imageUrl,
      description,
    });

    const createdVehicle = await vehicle.save();
    res.status(201).json(createdVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};