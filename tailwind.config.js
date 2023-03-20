/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'OpenSans':['Open Sans','sans-serif'],
        'Poppins':['Poppins','sans-serif'],
      },
      colors:{
        'Pink':'#ff52bf',
        'LightPink':'#ff8fd8',
        'LightRed':'#ff4242',
        'VeryDarkCyan':'#00252e',
        'VeryPaleBlue':'#f5faff',
      },
      container:{
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2.5rem',
          xl: '3.5rem',
          '2xl': '4rem'
        },
      },
    },
  },
  plugins: [],
}
