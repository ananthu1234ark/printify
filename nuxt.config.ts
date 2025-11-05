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
        },
        // Open Graph meta tags
        { property: 'og:title', content: 'Printify - Premium Printing Services in Marad, Kochi' },
        { property: 'og:description', content: 'Your trusted printing partner in Kochi for all your printing needs with exceptional quality and attention to detail.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://yourwebsite.com' },
        { property: 'og:image', content: '/images/printify-og.jpg' },
        // Twitter Card meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Printify - Premium Printing Services in Marad, Kochi' },
        { name: 'twitter:description', content: 'Your trusted printing partner in Kochi for all your printing needs.' }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
          crossorigin: 'anonymous'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Preconnect to improve performance
        { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      // Remove GSAP scripts since we're using Tailwind animations
      script: [
        // You can add any other necessary scripts here
      ]
    },
    // Add page transitions for better UX
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
    // Optimize build
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor chunks for better caching
            'vendor': ['vue', '@vue/composition-api']
          }
        }
      }
    },
    // CSS optimization
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        css: {
          additionalData: '@import "~/assets/css/animations.css";' // Custom animations
        }
      }
    }
  },

  // Runtime config for environment variables

  // Modules for additional functionality
  modules: [
    '@nuxt/image', // For optimized images
   
  ],


  

  // Development server configuration
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  }
})