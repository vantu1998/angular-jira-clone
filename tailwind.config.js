const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        spacing: {
          '64px': '64px'
        },
        backgroundColor: {
          'navbar': '#0747a6',
          'light-blue': 'rgb(28, 99, 206)'
        },
        colors: {
          textLogo: '#DEEBFF',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
