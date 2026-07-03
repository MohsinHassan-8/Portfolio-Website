/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: '#14120F',
        parchment: '#F5F1E8',
        cream: '#EDE7DA',
        gold: '#C9A876',
        charcoal: '#2B2620',
      },
    },
  },
  plugins: [],
}
