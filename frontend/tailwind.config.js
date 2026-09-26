/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          50: '#F4F7FC',
          100: '#E2E8F4',
          800: '#14233C',
          900: '#0A1628',
          950: '#050D18',
        },
        electric: {
          DEFAULT: '#0066FF',
          hover: '#0052CC',
          light: '#EBF3FF',
          dark: '#0047B3',
        },
        accent: {
          DEFAULT: '#FF6B35',
          hover: '#E8551E',
          light: '#FFF0EB',
        },
        'text-dark': '#1A1A2E',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 4px 20px -2px rgba(10, 22, 40, 0.06)',
        'clean-lg': '0 10px 30px -5px rgba(10, 22, 40, 0.08)',
        'electric-glow': '0 8px 25px -4px rgba(0, 102, 255, 0.35)',
        'card-hover': '0 20px 40px -15px rgba(10, 22, 40, 0.12)',
      },
    },
  },
  plugins: [],
}
