module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vk-light' : '#DFE6F1',
        'vk-text-light' : '#4F4F4F'
      },
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif']
      },
      backgroundImage: theme => ({
        'pattern-light': "url('https://sso.uns.ac.id/module.php/uns/img/symphony.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-filter-utilities'),
  ],
}
