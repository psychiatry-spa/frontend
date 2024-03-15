/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        "deep-sea": "#014E56",
        "ocean-wave": "#077C87",
        "sky-blue": "#75C1C6",
        frost: "#BFE0E1",
        coral: "#EF7A5B",
      },
    },
  },
  plugins: [],
};
