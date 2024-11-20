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
        fadeInLeft: 'fadeInLeft 1s ease-out',
        fadeIn: 'fadeIn 1s ease-in-out',
        growHorizontal: 'growHorizontal 1.5s ease-out forwards',
        growPlant: 'growPlant 5s ease-out forwards',
        diagonalIn: 'diagonalIn 1s ease-out',
        diagonalReveal: 'diagonalReveal 2s ease-out forwards'
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        growHorizontal: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        growPlant: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        diagonalIn: {
          '0%': {
            transform: 'translateX(-100%) translateY(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0) translateY(0)',
            opacity: 1,
          },
        },
        diagonalReveal: {
          '0%': {
            clipPath: 'inset(0 100% 0 0)',
            '100%': {
              clipPath: 'inset(0 0 0 0)',
            },
          },

        },
      },
    },
    plugins: [],
  }
}
