/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // tailwind.config.js code

      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },

      // colors
      colors: {
        colors: {
          // Primary colors
          "ai-blue": "#007bff",
          "deep-space-blue": "#031d44",
          "cybernetic-blue": "#00d1ff",

          // Secondary colors
          "quantum-silver": "#858585",
          "digital-gray": "#2e2e2e",
          "digital-gray-2": "#171717",
          "matrix-green": "#23d160",

          // Accent colors
          "neural-network-neon": "#fd49a0",
          "data-stream-orange": "#ff7f11",
          "innovation-gold": "#ffd700",

          // Neutral colors
          "cloud-compute-white": "#f8f9fa",
          "black-hole": "#000000",

          /* Error / Warning / Success */
          "color-error": "#dc3545" /* Red */,
          "color-warning": "#ffc107" /* Yellow */,
          "color-success": "#28a745" /* Green */,

          /* Utility colors */
          "color-text": "#212529" /* Text color */,
          "color-background": "#ffffff" /* Background color */,
        },
        gold: {
          500: "#FFD700", // A nice shade of gold.
          600: "#DAA520", // A slightly darker gold for hover state.
        },
      },
      borderWidth: {
        1: "1px", // Define a custom utility for a 1px border
      },
    },
  },
  plugins: [],
};
