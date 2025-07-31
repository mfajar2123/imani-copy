// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from 'axios';

// const getPostRoutes = async () => {
//   const response = await axios.get(
//     'https://imaniprima.co.id/wp-json/wp/v2/posts'
//   );
//   // return the array of routes
//   return response?.data.map((post: any) => `/media/${post.slug}`);
// };

export default defineNuxtConfig({
  vite: {
    build: {
      rollupOptions: {
        external: ['unenv/runtime/mock/noop']
      }
    }
  },
  ssr: true,
  nitro: {
    prerender: {
      failOnError: false,
    },
    
  },
  // app:{
  //   baseURL: process.env.BASE_URL
  // },

  // hooks: {
  //   async 'nitro:config'(nitroConfig) {
  //     // fetch the routes from our function above
  //     const slugs = await getPostRoutes();
  //     // add the routes to the nitro config
  //     nitroConfig.prerender?.routes?.push(...slugs);
  //   },
  // },
  // app: {
  //   baseURL: process.env.BASE_URL
  // },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    inject: false,
    baseUrl: '/assets/img'
  },

  modules: ['@nuxt/image', '@nuxt/content','@nuxt/ui', '@nuxt/scripts', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@pinia/nuxt', '@hypernym/nuxt-gsap'],
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true
    }
  },

 
  runtimeConfig: {
    public: { 
      wordpressUrl: 'https://webdev.imaniprima.co.id/graphql',
      serviceUrl: 'https://apimail.imaniprima.co.id/api',
      restUrl: 'https://webdev.imaniprima.co.id/wp-json/wp/v2'
    }
  },
  typescript: {
    typeCheck: false
  },
  app: {
    pageTransition: { 
      name: 'rotate'
    }
  },

  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-YEP3MNSGN9'
      }
    }
  },

 content: {
  highlight: false
},
nitro: {
    preset: 'netlify',
  },
})