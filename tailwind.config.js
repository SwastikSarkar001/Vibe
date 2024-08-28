/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aladin': ['Aladin', 'system-ui'],
        'sans': ['Public Sans', 'sans-serif'],
        'grotesk': ["Familjen Grotesk", 'Arial'],
        'akaya': ["Edu AU VIC WA NT Hand", "Akaya Telivigala", 'system-ui']
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, addComponents, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      ),
      addComponents({
        '.selected .child': {
          '@apply !top-[-1.5rem] !translate-y-0 text-sm text-white !left-0': {}
        },
        '.has-data.child': {
          '@apply !top-[-1.5rem] !translate-y-0 text-sm text-white !left-0': {}
        }
      })
    }),
  ],
}

