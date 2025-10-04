const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

function normalizeName(name) {
  return name.trim().replace(/\s+/g, ' ');
}

function parseDateTime(dateStr, timeStr) {
  // dateStr ISO (YYYY-MM-DD), time HH:mm local
  const [hours, minutes] = timeStr.split(':').map((n) => parseInt(n, 10));
  const date = new Date(dateStr);
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function deriveZodiacSign(date) {
  // Approximate Western zodiac
  const m = date.getUTCMonth() + 1; // 1-12
  const d = date.getUTCDate();
  const signs = [
    ['Capricorn', 1, 19],
    ['Aquarius', 2, 18],
    ['Pisces', 3, 20],
    ['Aries', 4, 19],
    ['Taurus', 5, 20],
    ['Gemini', 6, 20],
    ['Cancer', 7, 22],
    ['Leo', 8, 22],
    ['Virgo', 9, 22],
    ['Libra', 10, 22],
    ['Scorpio', 11, 21],
    ['Sagittarius', 12, 21],
  ];
  const idx = (m - 1) % 12;
  const [sign, month, day] = signs[idx];
  if (d <= day) return sign;
  const next = signs[(idx + 1) % 12][0];
  return next;
}

function deriveNumerologyNumber(name, date) {
  // Simple numerology: sum of character codes + day + month + year, reduced to 1-9
  const nameSum = name
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .reduce((sum, ch) => sum + (ch.charCodeAt(0) - 64), 0);
  const d = date.getUTCDate();
  const m = date.getUTCMonth() + 1;
  const y = date.getUTCFullYear();
  const total = nameSum + d + m + y;
  return reduceToSingleDigit(total);
}

function reduceToSingleDigit(num) {
  let n = Math.abs(num);
  while (n > 9) {
    n = n
      .toString()
      .split('')
      .reduce((s, c) => s + parseInt(c, 10), 0);
  }
  return n;
}

function generateSessionId() {
  return uuidv4();
}

function safeObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id) ? new mongoose.Types.ObjectId(id) : null;
}

module.exports = {
  normalizeName,
  parseDateTime,
  deriveZodiacSign,
  deriveNumerologyNumber,
  generateSessionId,
  safeObjectId,
};
