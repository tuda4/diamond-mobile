/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      sm: '370px',
      md: '648px',
      lg: '984px',
      xl: '1200px',
      '2xl': '1496px',
    },
  },
  plugins: [],
}
