/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#9EC6F3',
        'accent': '#BDDDE4',
        'light-1': '#ffffff',
        'light-2': '#F6F0F0',
        'grey-1': '#EDF4FF',
        'dark-1': '#151515',
        'dark-2': '#030303',
        'blue-1': '#D5E0FA',
        'blue-2': '#374274',
        'blue-3': '#F8F8F8',
      },
      
    },
  },
  plugins: [],
};
