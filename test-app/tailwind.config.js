/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './src/App.js',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        neutral: '#3A3A3A',
        accent: '#FF692A',
        white: '#ffffff',
      },
      fontFamily: {
        'bold': ['source_sans_probold'],
      },
      lineHeight: {
        '14': '14px',
        '17': '17px',
      }
    },
    fontFamily: {
      sans: ['source_sans_proregular', 'sans-serif'],
    },
    spacing: {
      '0': '0',
      '0.5': '2px',
      '1': '5px',
      '2': '10px',
      '3': '15px',
      '4': '20px',
      '5': '30px',
    },
    borderRadius: {
      DEFAULT: '5px',
    }
  },
  plugins: [],
}

