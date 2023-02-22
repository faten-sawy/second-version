/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow:{
        normalShadow : '0px 3px 6px rgba(230, 107, 107, 0.157)',
        cardShadow :'0px 3px 6px rgba(0, 0, 0, 0.11)'
      },
      screens:{
        '5xl':'1920px'
      }
      
    },
  },
  plugins: [],
}
