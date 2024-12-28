/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('https://i.pinimg.com/474x/62/27/24/622724be280fcd2cabba0d7a635bf4b0.jpg')"
      },
      fontFamily: {
        poppins:['Poppins', 'sans-serif'],
        nunito:['Nunito', 'sans-serif'],
      },
      screens: {
        '3xl': '1800px'
      },
    },  
  },
  plugins: [],
}