/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "defaultBlue": "#00A6FF",
        "defaultGray": "#888888",
        "defaultYellow": "#FFD600",
        "yellowStar": "#FFD703",
        "transparentBlack": "#020202",
        "defaultOffWhite": "#F2F2FA"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}