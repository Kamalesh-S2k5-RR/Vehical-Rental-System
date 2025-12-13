const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// --- Import our new auth routes ---
const authRoutes = require('./routes/authRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes'); // 1. ADD THIS LINE

// load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows requests from your React app
app.use(express.json()); // Allows server to accept JSON data

// Connect to MongoDB
// Make sure you have a .env file in this 'backend' folder
// with your MONGO_URI
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Basic Route
app.get('/', (req, res) => {
  res.send('Vehicle Rental API is running...');
});

// --- Use the Auth Routes ---
// Any request to /api/auth will beTCS
app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes); // 2. ADD THIS LINE

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});