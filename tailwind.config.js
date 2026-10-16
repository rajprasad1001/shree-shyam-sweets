/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: '#5a0f14',
        'deep-maroon': '#2b0709',
        gold: '#e0b04a',
        cream: '#fbf1dc',
        teal: '#0e6b66'
      }
    }
  },
  plugins: []
}
