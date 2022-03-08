module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default: "#7868FA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};