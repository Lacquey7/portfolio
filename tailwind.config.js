/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Chemin des fichiers pour scanner les classes Tailwind
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        aurora: 'aurora 10s ease infinite',
        twinkle: 'twinkle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'), // Ajoute DaisyUI
  ],
  daisyui: {
    themes: ["light", "dark", "wireframe", "lofi"],
  },
}