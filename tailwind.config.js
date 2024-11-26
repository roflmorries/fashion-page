/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "!./node_modules/**/*.*"
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F4F6F5',
        'custom-gold': '#EBD96B',
        'custom-yellow': '#FAE157',
        'dark-gray': '#7F7F7F',
        'yellow-footer': '#E5C643',
        'footer-gray': '#8E8E8E',
        'footer-text-gray': '#D9D9D9',
      },
      borderRadius: {
        'custom': '3.75rem',
        'custom-sm': '10px'
      },
      padding: {
        '61': '61px',
        '151': '161px',
      },
      margin: {
        '63': '63px',
        '69': '69px',
        '101': '101px',
        '190': '190px',
        '220': '220px',
      },
      width: {
        '484': '484px',
        '787': '787px',
        '750': '750px',
        '574': '574px',
      },
      height: {
        '968': '968px',
        '87': '87px',
        '852': '852px',
        '623': '623px',
        '545': '545px',
      },
      gap: {
        '188': '188px',
      }
    },
  },
  plugins: [],
}

