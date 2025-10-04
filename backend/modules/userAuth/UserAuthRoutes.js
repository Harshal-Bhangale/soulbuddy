const express = require('express');
const { signup, login } = require('./UserAuthController');
const { getProfile } = require('./UserAuthController');

const router = express.Router();

// Define the route for user registration (Signup)
// This will map to a URL like: POST /api/auth/signup 
router.post('/signup', signup);

// Placeholder for the Login Route (we'll implement the logic next)
// This will map to a URL like: POST /api/auth/login
router.post('/login', login);

router.get('/profile', protect, getProfile);

module.exports = router;