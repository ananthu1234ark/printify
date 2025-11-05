import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Printify | Printing Services in Marad, Kochi",
      meta: [
        { name: "description", content: "Premium printing services including flex, business cards, cloth, mug, and laser printing in Marad, Kochi." },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  // ✅ Add this section
  nitro: {
    preset: "netlify-static", // <-- this fixes your build
  },
});
