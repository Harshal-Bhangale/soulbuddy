// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#6B21A8',
//         secondary: '#14B8A6',
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        background: '#020617', // Slate 950
        surface: '#0f172a',    // Slate 900
        primary: '#7c3aed',    // Violet 600
        secondary: '#0ea5e9',  // Sky 500
        accent: '#ec4899',     // Pink 500
        'text-primary': '#f8fafc',  // Slate 50
        'text-secondary': '#94a3b8', // Slate 400
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideInUp: 'slideInUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
};