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
        primary: "#261B37", // Morado vibrante
        secondary: "#EBDFFF", // 
        accent: "#D6BEFF", // Amarillo
        gray: "#6c788e", // Gris oscuro
        black: "#000000", // Negro
        white:'#FFFFFF',
        terciary:'#3F274F', // Gris claro
      },
    },
  },
  plugins: [],
};
