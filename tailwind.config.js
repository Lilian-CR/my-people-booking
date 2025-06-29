export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3C6760',         // Green from logo
        mutedGray: '#595959',
        lightBorder: '#a6a6a6',
        contrastHover: '#ededed',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
