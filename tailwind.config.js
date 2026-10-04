/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#071510',
          900: '#0b2118',
          800: '#0f2c20',
          700: '#143c2c',
          600: '#1b4d39',
          500: '#236148',
          100: '#e4eee8',
        },
        gold: {
          400: '#ffd043',
          500: '#f5b301',
          600: '#df9e00',
        },
        cream: {
          50: '#faf8f2',
          100: '#f5f2e6',
          200: '#eee8d5',
          300: '#ded5bb',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        headline: ['"Anton"', 'sans-serif'],
        script: ['"Yellowtail"', '"Caveat"', 'cursive'],
        hand: ['"Caveat"', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        float: 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
