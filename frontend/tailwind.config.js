/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
        sans: ['"Noto Sans SC"', 'sans-serif'],
      },
      colors: {
        // Sepia theme colors
        sepia: {
          bg: '#f8f4e9',
          text: '#433422',
          dim: '#8c7b67',
          accent: '#a67c52',
          meta: '#ede6d6'
        }
      }
    },
  },
  plugins: [],
}
