/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // customized the fonts to poppins
        poppins: 'Poppins, sans-serif', // Adds a new `font-poppins` class
      }
    },

    colors:{
      'dark01':'#403F3F',
      'dark02':'#706F6F',
      'dark03':'#9F9F9F',
      'dark04':'#F3F3F3',
      'btn-primary':'#D72050',
      blue:colors.blue,
      red:colors.red,
      'rating':"#FF8C47"
    }
  },
  plugins: [require("daisyui")],
}

