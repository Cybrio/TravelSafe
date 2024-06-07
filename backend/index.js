const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load config
dotenv.config({ path: './config/config.env' });

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));