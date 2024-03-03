/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
        'custom-pink': '#ff49db',
      },
    },
  },
  plugins: [],
}

