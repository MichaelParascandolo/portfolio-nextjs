/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logoMP: ['"Pacifico"', "cursive"],
      },
      colors: {
        primary: "#ee2d2d", // different shade of red #D40000
      },
    },
  },
  plugins: [],
};
