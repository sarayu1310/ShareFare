module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          superlight: "#FFFFFF",
          light: "#FFF8F0",
          DEFAULT: "#FFEB D1",
          dark: "#978F85",
        },
        secondary: {
          light: "#EFEFEF",
          DEFAULT: "#A0A0A0",
          dark: "#26221D",
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
