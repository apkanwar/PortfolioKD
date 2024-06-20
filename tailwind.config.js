/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#252525',
        'midnight-black': '#1B1C1E',
        'grey-black': '#545454',
        'artic-blue': '#F0F8FF',
        'eazy-main': '#0099FF'
      },
      fontFamily: {
        'headings': ['Rubik', 'sans-serif'],
        'dText': ['Montserrat', 'sans-serif'],
        'numbers': ['Inter', 'sans-serif'],
        'main': ['League Spartan', 'sans-serif']
      }
    }
  },
  plugins: [],
}
