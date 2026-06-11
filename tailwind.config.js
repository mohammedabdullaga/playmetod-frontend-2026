/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#111827',
        surface2: '#171f3a',
        glow: '#cc9a00',
        gold: '#cc9a00',
      },
      boxShadow: {
        glow: '0 18px 55px rgba(204, 154, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
