/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {

      fontFamily: {
        'lily-script' : ['Lily Script One', 'cursive'],

        'primary' : ['Titillium Web', 'sans-serif'],

        'secondary' : ['Nunito Sans', 'sans-serif']

      },

      animation: {
        'ltr-linear-infinite': 'ltr-linear-infinite 10s linear infinite',
      },

      keyframes: {
        'ltr-linear-infinite': {
          'from': { 'background-position': '0 0' },
          'to': { 'background-position': '400% 0%' },
        },

      }

    }
  },
  plugins: [],
}