/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '448px',
      },
      colors: {
        primary: '#f13a01',
        secondary: '#DADADA',
      },
    },
  },
  plugins: [],
}

