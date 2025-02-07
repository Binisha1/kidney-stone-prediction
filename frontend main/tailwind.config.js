const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#c8d9e6",
        secondary: "#f5efeb",
        accent: "#567C8D",
        secondaryAccent: "#2f4156",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
