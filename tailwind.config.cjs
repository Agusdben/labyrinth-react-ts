/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        smoothOpacityIncrease: 'smoothOpacityIncrease 500ms ease-in-out'
      },
      keyframes: {
        smoothOpacityIncrease: {
          '0%': { opacity: 0.6 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
