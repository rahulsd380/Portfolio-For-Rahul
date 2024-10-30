/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      keyframes: {
        u: {
            from: { transform: 'rotate(360deg)' },
            to: { transform: 'rotate(0deg)' }
        }
    },
    
      fontFamily : {
        Montserrat : ["Montserrat", "sans-serif"],
        Lato : ["Lato", "sans-serif"],
        Poppins : ["Poppins", "sans-serif"],
        Sora : ["Sora", "sans-serif"],
      },
      
      screens: {
        xs: '300px',
        sm: '375px',
        mobileLg: '425px',
        md: '744px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

