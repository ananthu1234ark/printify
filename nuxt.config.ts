import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  // Enable Nuxt DevTools
  devtools: { enabled: true },

  // Global CSS file (you’ll create this next)
  css: ["~/assets/css/main.css"],

  // App head configuration
  app: {
    head: {
      title: "Printify | Printing Services in Marad, Kochi",
      meta: [
        { name: "description", content: "Premium printing services including flex, business cards, cloth, mug, and laser printing in Marad, Kochi." },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        // Font Awesome CDN
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
        },
        // Optional: Google Fonts
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },

  // Vite Configuration
  vite: {
    plugins: [tailwindcss()],
  },

  // Enable smooth scroll behavior globally
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
