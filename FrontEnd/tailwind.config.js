/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {

      backgroundImage: {
        'hero': "url('/src/images/bg.jpg')"
      },

      fontFamily: {
        'lily-script' : ['Lily Script One', 'cursive'],

        'primary' : ['Titillium Web', 'sans-serif'],

        'secondary' : ['Nunito Sans', 'sans-serif']

      },

      animation: {
        'ltr-linear-infinite': 'ltr-linear-infinite 30s linear infinite',
        'spin-slow': 'spin 3s linear infinite'
      },

      keyframes: {
        'ltr-linear-infinite': {
          "0%" : { 
            'background-position': '0 0',
             'opacity' : '.8'
          },

          '100%': { 
            'background-position': '0% 75%',
            'opacity' : '.8'
           },
        },

      }

    }
  },
  plugins: [],
}