/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {

      colors: {

        'primary' : '#202E33',

        'secondary' : '#ECCAA9',
      
        'tertiary' : '#81667A',
      
        'quaternary' : '#30D9C8',

        'quintiary' : '#E75A7C'
      },

      backgroundImage: {
        'hero': "url('/src/images/bg.jpg')",

        'slide-1': "url('/src/images/images.jpg')",
        'slide-2': "url('/src/images/download.jpg')",
        'slide-3': "url('/src/images/download1.jpg')",
        'slide-4': "url('/src/images/download2.jpg')",

      },

      fontFamily: {
        'lily-script' : ['Lily Script One', 'cursive'],

        'primary' : ['Titillium Web', 'sans-serif'],

        'secondary' : ['Nunito Sans', 'sans-serif']

      },

      animation: {
        'ltr-linear-infinite': 'ltr-linear-infinite 30s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'carousel': 'carouselAnim 50s infinite linear'
      },

      keyframes: {
        'ltr-linear-infinite': {
          "0%" : { 
            'background-position': '0 0',
             'opacity' : '.8'
          },

          '100%': { 
            'background-position': '0% 300%',
            'opacity' : '.8'
           },
        },
        'carouselAnim' : {
          'from' : {
            'transform': 'translate(-65rem, 0)'
          },

          'to' : {
            'transform': 'translate(75rem, 0)'
          }
        }

      }

    }
  },
  plugins: [],
}