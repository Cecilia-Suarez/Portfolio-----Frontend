/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Flex"', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInRight: 'fadeInRight 2s ease-out',
        growthLeft: 'growthLeft 5s ease-out forwards',
        tada: 'tada 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '50%': { opacity: '0.5', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        growthLeft: {
          '0%': {clipPath: 'inset(0 100% 0 0)'},
          '100%': {clipPath: 'inset(0 0 0 0)'},
        },
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%': { transform: 'scale(1.1) rotate(-3deg)' },
          '80%': { transform: 'scale(1) rotate(1deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        },
      },
    },
    plugins: [],
  }
}
