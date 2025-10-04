const User = require('./UserAuthModel'); // Import the User Model
const bcrypt = require('bcryptjs'); // Library for password hashing

/**
 * Creates a new user account with all profile details.
 * @param {object} userData - Object containing user details from the request body.
 * @returns {object} The created user object (excluding the password hash).
 */
exports.signupUser = async (userData) => {
    // 1. Check if user already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        // Throw an error if the email is already registered
        const error = new Error('A user with this email already exists.');
        error.statusCode = 409; // HTTP 409 Conflict
        throw error;
    }

    // 2. Hash the password for security
    // Generate a salt (recommended complexity is 10)
    const salt = await bcrypt.genSalt(10);
    // Hash the plaintext password using the generated salt
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    // 3. Create the new User instance
    const newUser = new User({
        fullName: userData.fullName,
        email: userData.email,
        password: hashedPassword, // Save the HASHED password
        dateOfBirth: userData.dateOfBirth,
        timeOfBirth: userData.timeOfBirth,
        gender: userData.gender,
        state: userData.state,
        city: userData.city,
    });

    // 4. Save the user to the database
    const user = await newUser.save();

    // 5. Prepare the response: remove the password hash before sending back
    // Use .toObject() to manipulate the Mongoose document before returning
    const userResponse = user.toObject();
    delete userResponse.password;

    return userResponse;
};


// Note: We will add the 'loginUser' function to this file later.
// For now, focusing on the required signup logic.


/**
 * Authenticates a user based on email and password.
 * @param {string} email - User's email address.
 * @param {string} password - User's plain text password.
 * @returns {object} The authenticated user object (excluding the password hash).
 */
exports.loginUser = async (email, password) => {
    // 1. Find the user by email, explicitly requesting the 'password' field
    // which was set to select: false in the Model.
    const user = await User.findOne({ email }).select('+password');

    // 2. Check if user exists and if the password matches
    if (user && (await bcrypt.compare(password, user.password))) {
        // Prepare the response: remove the password hash
        const userResponse = user.toObject();
        delete userResponse.password;

        return userResponse;
    } else {
        // Throw an error if authentication fails
        const error = new Error('Invalid credentials (email or password).');
        error.statusCode = 401; // HTTP 401 Unauthorized
        throw error;
    }
};