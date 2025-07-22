// tailwind.config.js
export default {
  theme: {
    extend: {
      screens: {
        tablet: '720px',
        '3xl': '1600px',
      },
      colors: {
        primary: '#238E8E',
      },
    },
  },
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
};
