// File: /tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec4899", // pink-500
        dark: "#0f172a", // slate-900
      },
    },
  },
  plugins: [],
}