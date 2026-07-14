/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF6EF',
        sand: '#F5EDE3',
        ink: '#1B1712',
        muted: '#6B6155',
        forest: {
          DEFAULT: '#14453A',
          light: '#1E5C4C',
          deep: '#0F3229',
        },
        teal: {
          DEFAULT: '#2C7A63',
          soft: '#E4F0EB',
        },
        clay: {
          DEFAULT: '#E15C2B',
          dark: '#CB4C1F',
          soft: '#FBE6DC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(27, 23, 18, 0.12)',
        card: '0 20px 60px -24px rgba(27, 23, 18, 0.18)',
        float: '0 24px 50px -20px rgba(27, 23, 18, 0.28)',
      },
      borderRadius: {
        '2xl': '1.1rem',
        '3xl': '1.6rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
