/** @type {import('tailwindcss').Config} */

export default {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'Sans-serif']
    },
    extend: {
      colors: {
        primary: {
          50: "#FFEEEB",
          100: "#FFDDD6",
          200: "#FFBBAD",
          300: "#FF9985",
          400: "#FF775C",
          500: "#FF5533",
          600: "#F52900",
          700: "#B81F00",
          800: "#7A1400",
          900: "#3D0A00",
          950: "#1F0500"
        },
        secondary: {
          50: "#EEEFF1",
          100: "#E0E1E6",
          200: "#BEC1CA",
          300: "#9FA3B1",
          400: "#808598",
          500: "#63687A",
          600: "#505463",
          700: "#3B3E49",
          800: "#272930",
          900: "#151619",
          950: "#090A0B"
        }
      }
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}
