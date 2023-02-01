/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        iraBody: 'Inter',
        iraTitle: 'Inconsolata',
      },
      colors: {
        iraPurple: '#9747FF',
        iraLavend: 'rgba(214, 204, 255, 0.5)',
        iraGreen: 'rgba(175, 244, 198, 0.7)',
        iraLightGreen: 'rgba(184, 255, 208, 0.5)',
        iraDarkGreen: '#14AE5C',
        iraRed: '#F24822',
        iraGrey: 'rgba(230, 230, 230, 0.7)',
        iraLightGrey: '#F3F3F3',
      },
    },
  },
  plugins: [],
}
