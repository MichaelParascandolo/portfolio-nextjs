/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logo: ["var(--font-pacifico)"], // Google pacifico font
      },
      colors: {
        primary: "#ee2d2d", // Different shade of red #D40000
      },
    },
  },
  plugins: [],
};
