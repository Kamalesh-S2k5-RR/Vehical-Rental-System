const express = require('express');
const router = express.Router();
const {
  getAllVehicles,
  getVehicleById,
  createVehicle,
} = require('../controllers/vehicleController');

// GET /api/vehicles
router.get('/', getAllVehicles);

// GET /api/vehicles/:id
router.get('/:id', getVehicleById);

// POST /api/vehicles
router.post('/', createVehicle); 

module.exports = router;