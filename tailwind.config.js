/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

export default {
  content: [''],
  purge: ['./assets/main.css', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    }
  ],
}