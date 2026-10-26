/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Arial', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        editorial: { 50: '#f8f7f4', 100: '#efede7', 500: '#827c70', 800: '#454239', 950: '#292722' },
        stone: { 50: '#faf9f6', 100: '#f1efe9', 200: '#dedbd4', 500: '#827c70', 700: '#514d45', 900: '#292722' },
      },
    },
  },
  plugins: [],
}
