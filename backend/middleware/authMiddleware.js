const jwt = require('jsonwebtoken');
const User = require('../modules/userAuth/UserAuthModel'); // Import the User Model

/**
 * @desc Protects routes by validating the JWT token sent in the header
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware function
 */
const protect = async (req, res, next) => {
    let token;

    // 1. Check if the token exists in the Authorization header
    // Format: 'Bearer TOKEN_STRING'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header (split to remove 'Bearer ')
            token = req.headers.authorization.split(' ')[1];

            // 2. Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key');

            // 3. Attach the user object to the request (excluding password)
            // We find the user by the ID stored in the token payload
            req.user = await User.findById(decoded.id).select('-password');

            // If user is found, proceed to the next middleware or controller function
            if (req.user) {
                next();
            } else {
                res.status(401).json({ message: 'Not authorized, user not found' });
            }

        } catch (error) {
            console.error(error);
            // If verification fails or token is invalid/expired
            res.status(401).json({ message: 'Not authorized, token failed or expired' });
        }
    }

    if (!token) {
        // If no token is provided in the header
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protect };