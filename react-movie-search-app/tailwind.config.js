/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Make sure Tailwind scans the index.html file
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure Tailwind scans JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
}
