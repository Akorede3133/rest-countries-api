/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          "dark-blue": "hsl(209, 23%, 22%)",
          "very-dark-blue-dark-bg": " hsl(207, 26%, 17%)",
          "very-dark-blue-light-text": "hsl(200, 15%, 8%)",
          "dark-grey-light-input": " hsl(0, 0%, 52%)",
          "very-light-gray-light-bg": "hsl(0, 0%, 98%)",
        }
      },
    },
  },
  plugins: [],
}