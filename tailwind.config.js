/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif'],
        Heebo: ['Heebo', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Bebas: ['Bebas Neue', 'sans-serif'],
      
        Tomorrow: ['Tomorrow',' sans-serif'],
      }
     
    },
  },
  plugins: [],
}
















