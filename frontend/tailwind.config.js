module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Indie Flower"', 'cursive'],
        site: ['"Rubik"', 'sans-serif'],
      },
      colors: {
        sumi: '#2E2E2E',
        washi: '#FDFBF5',
        torii: '#D94330',       
        kintsugi: '#E5A000',   
        nori: '#3B6452',        
        stone_zen: '#A3A3A3'
      },
      keyframes:{
        scaleIn:{
          '0%': {transform: 'scale(0.9)', opacity:'0'},
          '100%':{transform: 'scale(1)', opacity:'1'},
        },
      },
      animation: {
        scaleIn: 'scaleIn 0.2s ease-out'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}