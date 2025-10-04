const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    // User Authentication Fields
    email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please enter a valid email address'
        ]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false
    },

    // User Profile Details (from your requirements)
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Date of birth is required'],
    },
    timeOfBirth: {
        type: String, // Storing as a string (e.g., "14:30") might be simpler than Date/Time objects initially
        required: [true, 'Time of birth is required'],
        trim: true,
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: ['Male', 'Female', 'Other', 'Prefer not to say'],
    },
    state: {
        type: String,
        required: [true, 'State is required'],
        trim: true,
    },
    city: {
        type: String,
        required: [true, 'City is required'],
        trim: true,
    },

    // Additional fields (optional but recommended)
    createdAt: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        default: 'user',
    }
});

// FIX: Check if the model is already compiled before creating a new one.
// This prevents the OverwriteModelError during hot-reloading with Nodemon.
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;