/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        su: {
          'ch-200': '#EEEEEE',
          'ch-300': '#393E46',
          'ch-400': '#00ADB5',
          'ch-500': '#222831',
        },
        primary: {
          100: '#f1f7f7',
          200: '#d5e8e7',
          300: '#afd8d6',
          400: '#67a5a3',
          500: '#438d8a',
          600: '#306d68',
          700: '#204d46',
          800: '#0f2d23',
          900: '#061412',
        },
        secondary: {
          100: '#fdf1e6',
          200: '#f9d9c7',
          300: '#f2b49b',
          400: '#e7834c',
          500: '#d96105',
          600: '#b94905',
          700: '#8f3905',
          800: '#662a05',
          900: '#401a05',
        },
        neutral: {
          100: '#f9f9f9',
          200: '#f0f0f0',
          300: '#e1e1e1',
          400: '#c8c8c8',
          500: '#a9a9a9',
          600: '#767676',
          700: '#4d4d4d',
          800: '#2a2a2a',
          900: '#161616',
        },
        background: 'var(--color-neutral-100)',
        backgroundAlt: 'var(--color-primary-50)',
        text: 'var(--color-neutral-700)',
        textSecondary: 'var(--color-neutral-500)',
        textInverse: 'var(--color-neutral-100)',
        textLink: 'var(--color-primary-500)',
        textLinkHover: 'var(--color-primary-600)',
      },
    },
  },
  plugins: [],
};
