/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jost'],
        'nunito':['Nunito Sans', 'sans-serif']
      },
      colors:{
        "dark":'#133629',
        'light':'#3e6957'
      },
      display:['group-focus'],
      opacity:['group-focus'],
      inset:['group-focus']
    },
  },
  plugins: [],  
}