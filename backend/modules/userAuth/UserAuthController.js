const userAuthService = require('./UserAuthService');
const { generateToken } = require('../../utils/tokenUtils');

/**
 * @desc Register a new user with full profile details
 * @route POST /api/auth/signup
 * @access Public
 */
exports.signup = async (req, res) => {
    const {
        fullName,
        email,
        password,
        dateOfBirth,
        timeOfBirth,
        gender,
        state,
        city
    } = req.body;

    if (!email || !password || !fullName || !dateOfBirth || !timeOfBirth || !gender || !state || !city) {
        return res.status(400).json({ message: 'Please fill in all required fields for signup.' });
    }

    try {
        const newUser = await userAuthService.signupUser(req.body);
        const token = generateToken(newUser._id);

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            token,
            profile: {
                dateOfBirth: newUser.dateOfBirth,
                timeOfBirth: newUser.timeOfBirth,
                gender: newUser.gender,
                state: newUser.state,
                city: newUser.city,
                houses: newUser.houses || [],
                planetaryPositions: newUser.planetaryPositions || [],
            },
            message: 'User registered successfully and logged in.'
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message || 'Server error during signup.'
        });
    }
};

/**
 * @desc Authenticate a user and get token
 * @route POST /api/auth/login
 * @access Public
 */
exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide both email and password.' });
    }

    try {
        const user = await userAuthService.loginUser(email, password);
        const token = generateToken(user._id);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            token,
            profile: {
                dateOfBirth: user.dateOfBirth,
                timeOfBirth: user.timeOfBirth,
                gender: user.gender,
                state: user.state,
                city: user.city,
                houses: user.houses || [],
                planetaryPositions: user.planetaryPositions || [],
            },
            message: 'User logged in successfully.'
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message || 'Server error during login.'
        });
    }
};

/**
 * @desc Get logged-in user's profile
 * @route GET /api/auth/profile
 * @access Private
 */
exports.getProfile = async (req, res) => {
    try {
        const user = req.user; // req.user is populated by authMiddleware

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profile: {
                dateOfBirth: user.dateOfBirth,
                timeOfBirth: user.timeOfBirth,
                gender: user.gender,
                state: user.state,
                city: user.city,
                houses: user.houses || [],
                planetaryPositions: user.planetaryPositions || [],
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch profile.' });
    }
};
