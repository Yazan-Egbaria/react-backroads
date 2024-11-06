/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#102A42",
        secondaryColor: "#2caeba",
        thirdColor: "#617D78",
      },
      backgroundImage: {
        "hero-image": "url('/public/assets/main.jpeg')",
      },
    },
  },
  plugins: [],
};
