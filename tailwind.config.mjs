/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#261B37", 
        secondary: "#EBDFFF", // 
        accent: "#D6BEFF", 
        gray: "#4f5766ff", 
        black: "#000000", 
        white:'#FFFFFF',
        terciary:'#3F274F', 
      },
    },
  },
  plugins: [],
};
