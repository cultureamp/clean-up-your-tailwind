/** @type {import('tailwindcss').Config} */
const { Preset } = require("@kaizen/tailwind");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  presets: [Preset],
  plugins: [],
};
