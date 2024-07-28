/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#ffc107',
      secondary: '#000000',
      'black-1': '#0e1c26',
      'black-2': '#13232c',
      'white-1': '#FFFFFF',
      'green-1': '#40534C',
      'light-green-1': '#CDFADB',
      'blue-1': '#172a32',
      'blue-2': '#1c3139',
      'blue-3': '21373f',
      'blue-4': '#253e45',
      'light-blue-1': '#CAF4FF',
      'purple-1': '#DFCCFB',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
