import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
    colors: {
      blue: {
        DEFAULT: '#003049ff',
        lighter: '#006aa3',
        lightest: '#009ff5',
      },
      red: {
        DEFAULT: '#d62828ff',
        darker: '#ac2020',
        darkest: '#791616',
      },
      orange: {
        DEFAULT: '#fbac0e',
        darker: '#f77f00ff',
      },
      xanthous: '#fcbf49ff',
      vanilla: '#eae2b7ff',
      offwhite: '#fafafa',
      white: '#ffffff',
      success: colors.green[600],
      danger: colors.red[600],
      warning: colors.yellow[600],
      black: '#000',
      dark: '#444',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
