/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f5',
          100: '#ffe6e6',
          200: '#ffc9c9',
          300: '#ff9999',
          400: '#ff6b6b',  // primary
          500: '#ff5252',
          600: '#e63939',
          700: '#cc2727',
          800: '#a31f1f',
          900: '#7a1a1a',
        },
        purple: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dbd1ff',
          300: '#c3b0ff',
          400: '#a882ff',
          500: '#9d4edd',  // secondary
          600: '#8a35c9',
          700: '#7326a5',
          800: '#5e1f87',
          900: '#4a1a6b',
        },
        teal: {
          50: '#effcfb',
          100: '#d0f7f4',
          200: '#a5efea',
          300: '#6de3da',
          400: '#36d1c4',
          500: '#2ec4b6',  // accent
          600: '#1d9d93',
          700: '#1a7c75',
          800: '#19625d',
          900: '#19514e',
        },
      },
      borderWidth: {
        '12': '12px',
      },
    },
  },
  plugins: [],
};