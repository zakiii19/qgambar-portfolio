/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- WAJIB ADA INI
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- WAJIB ADA INI AGAR TAILWIND MEMBACA App.jsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}