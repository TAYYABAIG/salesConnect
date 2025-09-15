/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#F2FBFF',
        primary: '#67CCF3',
        Secondary: '#013151',
        headingPrimary: '#28D4FF',
        mblack: "#0D161A",
        mgray: "#565656",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        // gradients
        'blue-gradient': "linear-gradient(180deg, #0575BC 0%, #26CFFB 100%)",
        'custom-gradient': "linear-gradient(180deg, #28D4FF 0%, #026EB7 100%)",
      },
      breakpoints: {
        'xs': '480px',
      },
    }
  },
  plugins: [],
}