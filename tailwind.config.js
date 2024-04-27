/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Montserrat : ["Montserrat", "sans-serif"],
        Lato : ["Lato", "sans-serif"],
        Poppins : ["Poppins", "sans-serif"],
      },
      screens: {
        xs: '300px',
        sm: '370px',
        md: '744px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

