const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}", "./src/*.html", "./node_modules/flyonui/dist/js/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors(), 
    require("flyonui"),     
    require("flyonui/plugin"),
  ],
};
