/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "600px":"600px",
      "1000px":"1000px"
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
