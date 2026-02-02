/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary':'#E58411',
        'secondary':'#1E1E1E',
        'secondary-bg':'#F7F7F7',
    },
    fontFamily: {
      'primary': ['Poppins', 'sans-serif'],
    },
  },
},
  plugins: [],
}
