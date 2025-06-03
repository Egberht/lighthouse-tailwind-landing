/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: {
          100: '#f7f7f7',
          150: '#f0f0f0',
          200: '#e0e0e0',
          250: '#d1d1d1',
          300: '#bfbfbf',
          350: '#a8a8a8',
          400: '#8f8f8f',
          450: '#7f7f7f',
          500: '#666666',
          550: '#555555',
          600: '#444444',
          650: '#333333',
          700: '#2d2d2d',
          750: '#262626',
          800: '#1f1f1f',
          850: '#191919',
          900: '#141414',
          950: '#0f0f0f',
          1000: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
}


