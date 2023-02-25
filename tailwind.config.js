/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.{js,jsx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        white: '#ffffff',
        dark: '#263238',
        'dark-variant': '#0f1518',
        yellow: '#fce130',
        'yellow-variant': '#b5a121'
      }
    }
  },
  plugins: []
}