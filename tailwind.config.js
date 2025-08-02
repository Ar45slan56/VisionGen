// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    colors: {
      "glass-dark": "#0f0c29",
      "glass-purple": "#302b63",
      "glass-black": "#24243e",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
},

  plugins: [],
};
