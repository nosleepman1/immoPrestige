/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
  extend: {
    colors: {
      primaire: "var(--primary)",
      secondaire: "var(--secondary)",
      accent: "var(--accent)",
      fond: "var(--background)",
      texte: "var(--foreground)",
      sombre: "var(--sombre)",
      fondSombre: "var(--fond-sombre)",
      texteSombre: "var(--texte-sombre)",
    },
  },
},

  plugins: [],
}
