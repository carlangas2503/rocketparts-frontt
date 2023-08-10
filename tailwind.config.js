

/** @type {import('tailwindcss').Config} */
module.exports={
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'underline-width': {
          '0%': { 'width': '0' },
          '100%': { 'width': '100%' },
        },
      },
      animation: {
        'underline-width': 'underline-width 0.5s',
      },
    },
  },
  plugins: [],
}

