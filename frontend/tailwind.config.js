module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vk-light' : '#DFE6F1',
        'vk-text-light' : '#4F4F4F',
      },
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-filter-utilities'),
  ],
}
