/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
      'xxs': '9px', // 11px
    }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
