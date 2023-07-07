/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary: "#474747",
        terciary: "#001429",
        quaternary: "#1F1F1F",
        quinary: "#55678B",
        senary: "#414f6b",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern-1": "url('/src/assets/mountain.jpg')",
        "hero-pattern-2": "url('/src/assets/mountain1.jpg')",
        "hero-pattern-3": "url('/src/assets/mountain2.jpg')",
        "hero-pattern-4": "url('/src/assets/peak.jpg')",
        "hero-pattern-5": "url('/src/assets/slider1')",
        "hero-pattern-6": "url('/src/assets/slider2')",
      },
    },
    screens: {
      xs: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
  },
  plugins: [],
};
