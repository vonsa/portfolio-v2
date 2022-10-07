const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      red: {
        100: "#ff0000",
        400: "#dd0000",
        500: "#bb0000",
        700: "#ff4444",
      },
    },
    extend: {},
  },
  plugins: [],
};
