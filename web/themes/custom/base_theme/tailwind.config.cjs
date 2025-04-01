/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '**/*.{html,twig,js}',
    '!./node_modules/**/*'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '425px', // => @media (min-width: 640px) { ... }
        'sm': '640px', // => @media (min-width: 640px) { ... }
        'md': '768px', // => @media (min-width: 768px) { ... }
        'lg': '1024px', // => @media (min-width: 1024px) { ... }
        'xl': '1280px', // => @media (min-width: 1280px) { ... }
        '2xl': '1536px' // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        "title-1": ["Lora", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        vibes: ['Great Vibes', 'cursive'],
        parisienne: ['Parisienne', 'cursive'],
      },
      fontSize: {
        'xl': ['1.875rem', '2.25rem'],
        'lg': ['1.25rem', '1.5rem'],
        'md': ['1.125rem', '1.35rem'],
        'base': ['1rem', '1.3rem'],
        'sm': ['0.875rem', '1.05rem'],
        'xs': ['0.75rem', '0.9rem'],
      },
      colors: {
        grey: {
          200: "#D4D4D4",
          300: "#525252",
          400: "#222931",
        },
        primary: {
          200: "#D7CDBE",
          300: "#ccc3b6",
          400: "#c1baae",
        },
        secondary: {
          200: "#9F846B",
          300: "#9b836e",
          400: "#978370",
        },
        tertiary: {
          200: "#fafaed",
          300: "#b4999d",
          400: "#ad9699",
        },
      },
    },
  },
  plugins: [],
}
