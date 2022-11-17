const colors = require("tailwindcss/colors");

const red = {
  100: "#ff0000",
  400: "#dd0000",
  500: "#bb0000",
  700: "#ff4444",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    textColor: {
      ...colors,
      primary: "var(--color-highlight)",
      red,
    },
    backgroundColor: {
      ...colors,
      primary: "var(--color-base)",
      red,
    },
    extend: {},
  },
  plugins: [],
};
