// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,jsx,ts,tsx,css}'],
  darkMode: 'media',
  theme: {
    
    screens: {

      'g': '320px',
      // => @media (min-width: 320px) { ... }

      'l': '375px',
      // => @media (min-width: 375px) { ... }

      'x': '425px',
      // => @media (min-width: 425px) { ... }

      'xm': '481px',
      // => @media (min-width: 481px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      // Configure your color palette here
      Naranja_claro :'#ff983b',
      Naranja_oscuro_desaturado:'#795548', 
      Naranja_suave:'#f0ae62',
      Rojo_claro:'#ff6956',
      Amarillo_intenso:'#f9d11f',
      Rojo_suave:'#fc6067',
      Cian_suave:'#60d9fe',
      Amarillo_vivo:'#f7ce23',
      Rojo_oscuro:'#9c2e2f',
      Naranja_oscuro_moderado:'#93744c',


      Gris_muy_claro:'#f3f3f3',
      Rojo_grisáceo_claro:'#f8f4f4',
      Cian_oscuro:'#048848',
      Blanco:'#FFFFFF',
      Negro:'#000000',
      Plata:'#Bcbcbc',
    },
    extend: {
      fontFamily: {
        'font-family': ['Uber Move Text'],
        'font-family-light': ['Uber Move Text', 'system-ui', "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif'],
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}