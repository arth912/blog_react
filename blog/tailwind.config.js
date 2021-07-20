module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('https://source.unsplash.com/1660x800/?beautysalon')",
       })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
