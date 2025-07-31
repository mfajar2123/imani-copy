

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background-home-banner':  "url(/img/banner-home.png)",
      },
      colors: {
        'green-imani' : '#305e63',
        'green-light' : '#dfeeea',
      },
    },
    fontFamily: {
      'sserif': ['sans-serif']
    },
    backgroundSize: {
      'career': '100% 80%',
      'cover': 'cover',
      'contain': 'contain',
    }
  },
  module:{
    darkMode : ['variant', '&:not(.dark *)'],
  }
}

