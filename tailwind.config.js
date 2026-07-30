/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36abfa',
          500: '#0c8ee9',
          600: '#0070c7',
          700: '#0259a2',
          800: '#064b85',
          900: '#0b3f6f',
          950: '#07284a',
        },
        dark: {
          bg: '#0B0F17',
          card: '#131B2A',
          border: '#1E293B',
          hover: '#1C2638',
          text: '#F8FAFC',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Cairo', 'Alexandria', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(12, 142, 233, 0.25)',
        'glow-lg': '0 0 40px -10px rgba(12, 142, 233, 0.35)',
      }
    },
  },
  plugins: [],
}
