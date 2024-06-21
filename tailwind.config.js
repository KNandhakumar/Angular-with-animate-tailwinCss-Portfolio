/** @type {import('tailwindcss').Config} */
const animations = require('@midudev/tailwind-animations');

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        upDown: 'upDown 2s linear infinite',
        spinClockwise: 'spinClockwise 5s linear infinite',
      },
      keyframes: {
        upDown: {
          '0%': { paddingTop: '0px' },
          '50%': { paddingTop: '20px' },
          '100%': { paddingTop: '0px' },
        },
        spinClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [animations],
};
