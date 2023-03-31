/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'pastel-green': '#CCD5AE',
        'pastel-pea': '#E9EDC9',
        'mayo': '#FEFAE0',
        'mayo-toast': '#FAEDCD',
        'salad': '#1E5128',
      },
      fontFamily: {
        noto_sans: ['NotoSansJP-Medium', 'sans-serif'],
        umeboshi: ['umeboshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
