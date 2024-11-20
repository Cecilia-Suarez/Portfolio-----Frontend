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
        growthLeft: 'growthLeft 5s ease-out forwards',
        tada: 'tada 1s ease-in-out',
        spinnerGrow: 'spinnerGrow 1.5s forwards ease-in-out',
        slideInRight: 'slideInRight 5s ease-out',
        slideInLeft: 'slideInLeft 5s ease-out',
        slideInUp: 'slideInUp 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
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
        spinnerGrow: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(0.5)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
    plugins: [],
  }
}
