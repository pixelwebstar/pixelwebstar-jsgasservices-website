/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#dc2626',
        accent: '#2563eb',
        dark: '#0f172a',
        light: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        malayalam: ['Manjari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
