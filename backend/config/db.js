const mongoose = require('mongoose');

async function connectDB() {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/soulbuddy';
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoUri, {
      autoIndex: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
}

module.exports = { connectDB };
