/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        paper: '#FFFFFF',
        cream: '#F8F8F5',
        sun: '#FFCD1D',
        graphite: '#202020',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
        wide2: '0.14em',
        tightest: '-0.055em',
      },
      maxWidth: {
        frame: '1680px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
      },
    },
  },
  plugins: [],
}
