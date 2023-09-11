/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Include additional files or components here
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      maxWidth: {
        '3/4': '75%',
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};
