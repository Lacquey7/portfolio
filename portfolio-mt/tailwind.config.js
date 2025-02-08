/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Chemin des fichiers pour scanner les classes Tailwind
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Ajoute DaisyUI
  ],
  daisyui: {
    themes: ["light", "dark", "wireframe", "lofi"],
  },
}