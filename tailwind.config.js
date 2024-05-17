/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1700px',
      },
      padding: {
        'mobile': '1.5rem',
        'large': '6rem',
        // 'xlarge': '8rem',
      },
      textColor: {
        "Heading": "#101828",
        "SubGray": "#667085",
        "Violet": "#6941C6",
      },

      fontSize: {
        'headingLarge': ['5rem', {fontWeight: '600', lineHeight: '5.5rem'}],
        'headingSmall': ['3rem', {fontWeight: '600'}],
        'subHeadMobile': ['1.2rem', { fontWeight: '300', letterSpacing: '0.02em' }],
        'subHeadMD': ['1.5rem'],
      }
    },
  },
  plugins: [],
}