// middleware/errorHandler.js

module.exports = function errorHandler(err, req, res, next) {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const details = err.details || undefined;

  // Log errors to the console (except in test environment)
  if (process.env.NODE_ENV !== 'test') {
    console.error('[Error]', status, message, details || '', err.stack || '');
  }

  // Send consistent JSON response
  res.status(status).json({
    success: false,
    error: message,
    details,
    // Include stack trace only in development mode
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};
