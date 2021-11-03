module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        // 'hero': "rgba(0, 0, 0, 1)"
      },
      backgroundImage: {
        // 'hero': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1518810370118-0fde40f8b0f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80)",
        // 'hero': "linear-gradient(to right bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6), url('../src/images/raphael-nogueira-Znvxeud6sDc-unsplash.jpg')",
        'hero': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) ), url('../public/images/raphael-nogueira-Znvxeud6sDc-unsplash.jpg')",
      }
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
      fontWeight: ['active'],
      inset: ['hover'],
    },
  },
  plugins: [],
}
