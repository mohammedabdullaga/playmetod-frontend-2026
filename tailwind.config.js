/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#111827',
        surface2: '#171f3a',
        glow: '#ffbb00',
        gold: '#ffbb00',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(255, 187, 0, 0.16)',
      },
    },
  },
  plugins: [],
}
