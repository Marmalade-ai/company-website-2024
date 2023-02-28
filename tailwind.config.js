/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: {
  //   content: [
  //   // Example content paths...
  //   './public/**/*.html',
  //   './src/**/*.{js,jsx,ts,tsx}',
  //   ],
  // },
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}