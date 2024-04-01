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
        "accent": "#F2957C",
        "accent-focus": "#EF7A5B",
        "accent-100": "#FDF2EF",
        
        "primary": "#014E56",
        "primary-focus": "#00353D",
        "primary-900": "#1A6067",
        "primary-800": "#347178",
        "primary-700": "#4D8389",
        "primary-600": "#619196",
        "primary-500": "#7AA2A6",
        "primary-300": "#B3CACC",
        "primary-200": "#CCDCDD",
        "primary-100": "#E6F2F3",
        "primary-005": "#F2F6F7",


        "secondary": "#67959A",
        "secondary-900": "#7AA2A6",

        "disabled": "#BFE0E1",

        "background": "#F7F7F7",
        "field-background": "#F2F6F7",



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
