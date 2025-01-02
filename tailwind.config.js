/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out',
      },
      animation: {
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1)',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
      fontWeight: {
        custom: "<weight>",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

