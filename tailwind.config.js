/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // insert fonts
      },
      colors: {
        primary: "#F5C639",
        secondary: "#F9DC5C",
        background: "#FDF8E1",

        
      }
    },
  },
  plugins: [],
}