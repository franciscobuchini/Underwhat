const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}", "./src/*.html", "./node_modules/flyonui/dist/js/*.js", "../path/to/notyf/**/*.js",],
  theme: {
    extend: {},
  },
  flyonui: {
    vendors: true // Enable vendor-specific CSS generation
  },
  plugins: [
    addDynamicIconSelectors(), 
    require("flyonui"),     
    require("flyonui/plugin"),
  ],
};
