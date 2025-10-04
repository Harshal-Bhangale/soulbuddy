const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env vars early
dotenv.config();

const { connectDB } = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Routes

const userAuthRoutes = require('./modules/userAuth/UserAuthRoutes');

const app = express();

// Security & logging
app.use(helmet());
app.use(morgan('dev'));

// CORS
const allowedOrigin = process.env.CORS_ORIGIN || '*';
app.use(cors({ origin: allowedOrigin }));

// Body parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Health endpoint
app.get('/', (req, res) => {
  res.json({ status: 'ok', name: 'SoulBuddy API', version: '1.0.0' });
});

// API routes
app.use('/api/auth', userAuthRoutes);


// Error handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Connect to DB, then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SoulBuddy backend running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
