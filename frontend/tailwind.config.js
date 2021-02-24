module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mac-panel-light': '#f7f7f7',
        'mac-form-light': '#eeeeee',
        'mac-placeholder': '#ACACAC',
        'mac-input-outline': '#3B99FC',
        'mac-light-blue': '#6CB3FA',
        'mac-blue' : '#067DFF',
        'mac-light' : '#EDEDED',
        'mac-light-gray': '#EDECED',
        'mac-gray' : '#D2D1D2'
      },
      backgroundImage: theme => ({
        'mac-image': "url('/src/img/bg.jpg')"
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
