/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'custom-pink': 'rgba(255, 202, 206, 0)',
      },
    },
  },
  plugins: [],
}

