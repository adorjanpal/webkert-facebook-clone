/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#7A4ACC',
        'light-1': '#ffffff',
        'dark-1': '#151515',
        'dark-2': '#030303',
      },
      
    },
  },
  plugins: [],
};
