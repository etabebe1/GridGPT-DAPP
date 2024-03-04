/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-dark-more": "var(--color-primary-dark-more)",
        "primary-light": "var(--color-primary-light)",
        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",
        "secondary-heavy-dark": "var(--color-secondary-heavy-dark)",
        "secondary-heavy-dark-2": "var(--color-secondary-heavy-dark-2)",
        "secondary-light": "var(--color-secondary-light)",
        accent: "var(--color-accent)",
        "accent-dark": "var(--color-accent-dark)",
        "accent-light": "var(--color-accent-light)",
        "neutral-dark": "var(--color-neutral-dark)",
        "neutral-light": "var(--color-neutral-light)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
        success: "var(--color-success)",
        text: "var(--color-text)",
        background: "var(--color-background)",
      },
    },
  },
  plugins: [],
};
