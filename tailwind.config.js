/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width:{
        '128':"99%"
      },
      height:{
        '128':'28rem'
      },
      fontFamily:{
        title:["Poppins", "sans-serif"],
        subtitle:["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
}

