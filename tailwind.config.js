/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary: "#707070",
        terciary: "#001429",
        quaternary: "#1F1F1F",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
    screens: {
      ss: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
  },
  plugins: [],
};
