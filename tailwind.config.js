/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scans all JS/JSX/TS/TSX files in src folder
    "./public/index.html"          // Scans index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

