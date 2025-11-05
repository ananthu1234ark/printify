import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  
  // Add these essential configurations
  ssr: false, // Important for static hosting
  target: 'static',
  
  // SEO and App config
  app: {
    head: {
      title: 'Printify - Premium Printing Services in Marad, Kochi',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Printify offers high-quality printing services in Marad, Kochi including flex printing, business cards, cloth printing, mug printing, and laser printing.' 
        }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' 
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
    // Add build optimizations
    build: {
      rollupOptions: {
        external: ['gsap'] // GSAP is loaded via CDN
      }
    }
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://your-site.netlify.app'
    }
  }
})