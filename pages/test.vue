<template>
  <div class="min-h-screen bg-white overflow-hidden">
    <!-- Navigation -->
    <nav 
      ref="nav"
      class="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-500"
      :class="{ 'shadow-lg py-2': scrolled, 'py-4': !scrolled }"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-900">Printify</h1>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <a 
            v-for="(item, index) in navItems" 
            :key="index"
            :href="item.href" 
            class="font-medium text-gray-700 hover:text-red-600 transition-colors duration-300 relative group"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <button class="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
          Get Quote
        </button>
        
        <button class="md:hidden text-gray-700" @click="mobileMenuOpen = !mobileMenuOpen">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
      
      <!-- Mobile menu -->
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden bg-white py-4 px-4 shadow-lg border-t border-gray-100"
      >
        <div class="flex flex-col space-y-4">
          <a 
            v-for="(item, index) in navItems" 
            :key="index"
            :href="item.href" 
            class="font-medium text-gray-700 hover:text-red-600 transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 relative overflow-hidden">
      <!-- Animated background elements -->
      <div ref="floatingShapes" class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-20 h-20 bg-red-100 rounded-full opacity-40"></div>
        <div class="absolute top-1/3 right-1/4 w-16 h-16 bg-red-200 rounded-full opacity-30"></div>
        <div class="absolute bottom-1/4 left-1/3 w-24 h-24 bg-red-100 rounded-full opacity-40"></div>
        <div class="absolute bottom-1/3 right-1/3 w-12 h-12 bg-red-200 rounded-full opacity-30"></div>
      </div>
      
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0">
            <div class="relative">
              <!-- Animated badge -->
              <div 
                ref="badge"
                class="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium mb-6 shadow-sm"
              >
                <span class="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Premium Printing Services in Marad, Kochi
              </div>
              
              <h1 
                ref="heroTitle"
                class="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Your Vision, 
                <span class="text-gradient">Printed Perfectly</span>
              </h1>
              
              <p 
                ref="heroText"
                class="text-xl text-gray-600 mb-8 max-w-lg"
              >
                From business cards to large format flex prints, we bring your ideas to life with exceptional quality and attention to detail.
              </p>
              
              <div 
                ref="heroButtons"
                class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <button class="px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  <span>Explore Services</span>
                  <i class="fas fa-arrow-right ml-2"></i>
                </button>
                <button class="px-8 py-3.5 bg-white text-gray-800 border border-gray-300 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  <i class="fas fa-play-circle mr-2 text-red-600"></i>
                  <span>View Portfolio</span>
                </button>
              </div>
            </div>
          </div>
          
          <div class="lg:w-1/2 relative">
            <!-- Animated printing elements -->
            <div class="relative h-96 lg:h-[500px]">
              <!-- Main product showcase -->
              <div 
                ref="productShowcase"
                class="absolute inset-0 flex items-center justify-center"
              >
                <div class="relative w-64 h-80 bg-white rounded-2xl shadow-2xl transform rotate-3 overflow-hidden border-4 border-white">
                  <div class="absolute inset-0 bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
                    <div class="text-center p-6">
                      <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
                        <i class="fas fa-print text-2xl text-white"></i>
                      </div>
                      <h3 class="text-xl font-bold text-gray-800 mb-2">Business Cards</h3>
                      <p class="text-gray-600 text-sm">Premium Quality Printing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating elements -->
              <div 
                ref="floatingCard"
                class="absolute top-10 left-4 lg:left-10 w-40 h-52 bg-white rounded-xl shadow-2xl transform -rotate-6 border-2 border-red-100"
              >
                <div class="h-full flex items-center justify-center p-4">
                  <div class="text-center">
                    <i class="fas fa-id-card text-3xl text-red-600 mb-3"></i>
                    <p class="font-semibold text-gray-700">Cards</p>
                  </div>
                </div>
              </div>
              
              <div 
                ref="floatingMug"
                class="absolute top-20 right-4 lg:right-10 w-32 h-32 bg-white rounded-full shadow-2xl transform rotate-12 border-2 border-red-100"
              >
                <div class="h-full flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-mug-hot text-2xl text-red-600"></i>
                  </div>
                </div>
              </div>
              
              <div 
                ref="floatingCloth"
                class="absolute bottom-20 left-8 lg:left-16 w-36 h-36 bg-white rounded-xl shadow-2xl transform rotate-3 border-2 border-red-100"
              >
                <div class="h-full flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-tshirt text-2xl text-red-600 mb-2"></i>
                    <p class="font-semibold text-gray-700">Cloth</p>
                  </div>
                </div>
              </div>
              
              <div 
                ref="floatingLaser"
                class="absolute bottom-10 right-8 lg:right-16 w-44 h-24 bg-white rounded-xl shadow-2xl transform -rotate-6 border-2 border-red-100"
              >
                <div class="h-full flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-bolt text-2xl text-red-600 mb-1"></i>
                    <p class="font-semibold text-gray-700">Laser Print</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
      <!-- Background pattern - Fixed SVG -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-pattern"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 ref="servicesTitle" class="text-4xl font-bold text-gray-900 mb-4">Our Printing Services</h2>
          <p ref="servicesSubtitle" class="text-xl text-gray-600 max-w-2xl mx-auto">We offer a comprehensive range of printing solutions for all your needs</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index" 
            :ref="el => { if (el) serviceCards[index] = el }"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group overflow-hidden relative"
          >
            <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10" 
                 :class="service.color">
              <i :class="service.icon" class="text-2xl text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 relative z-10">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4 relative z-10">{{ service.description }}</p>
            <a href="#" class="text-red-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300 relative z-10">
              Learn more
              <i class="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 bg-white relative overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 ref="portfolioTitle" class="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p ref="portfolioSubtitle" class="text-xl text-gray-600 max-w-2xl mx-auto">See examples of our high-quality printing projects</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(item, index) in portfolioItems" 
            :key="index"
            :ref="el => { if (el) portfolioCards[index] = el }"
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
          >
            <div class="h-48 bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center relative overflow-hidden">
              <i :class="item.icon" class="text-6xl text-white opacity-90"></i>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden">
      <!-- Animated circles -->
      <div class="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
      <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full"></div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 ref="ctaTitle" class="text-4xl font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
        <p ref="ctaText" class="text-xl mb-8 max-w-2xl mx-auto opacity-90">Contact us today for a free quote on your next printing project</p>
        <div ref="ctaButtons" class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button class="px-8 py-3.5 bg-white text-red-600 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Get Free Quote
          </button>
          <button class="px-8 py-3.5 bg-transparent border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
            Visit Our Store
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                <i class="fas fa-print text-white"></i>
              </div>
              <h2 class="text-2xl font-bold">Printify</h2>
            </div>
            <p class="mt-4 text-gray-400">Marad, Kochi • Premium Printing Services</p>
          </div>
          
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 Printify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Refs for GSAP animations
const nav = ref(null)
const badge = ref(null)
const heroTitle = ref(null)
const heroText = ref(null)
const heroButtons = ref(null)
const productShowcase = ref(null)
const floatingCard = ref(null)
const floatingMug = ref(null)
const floatingCloth = ref(null)
const floatingLaser = ref(null)
const floatingShapes = ref(null)
const servicesTitle = ref(null)
const servicesSubtitle = ref(null)
const serviceCards = ref([])
const portfolioTitle = ref(null)
const portfolioSubtitle = ref(null)
const portfolioCards = ref([])
const ctaTitle = ref(null)
const ctaText = ref(null)
const ctaButtons = ref(null)

// State
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

// Data
const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

const services = [
  {
    title: 'Flex Printing',
    description: 'High-quality large format flex printing for banners, hoardings, and signage.',
    icon: 'fas fa-scroll',
    color: 'bg-gradient-to-br from-red-600 to-red-800'
  },
  {
    title: 'Business Cards',
    description: 'Professionally designed and printed business cards that make a lasting impression.',
    icon: 'fas fa-id-card',
    color: 'bg-gradient-to-br from-red-600 to-red-800'
  },
  {
    title: 'Cloth Printing',
    description: 'Custom printing on various fabrics for uniforms, promotional items, and more.',
    icon: 'fas fa-tshirt',
    color: 'bg-gradient-to-br from-red-600 to-red-800'
  },
  {
    title: 'Mug Printing',
    description: 'Personalized mug printing perfect for gifts, promotions, and special occasions.',
    icon: 'fas fa-mug-hot',
    color: 'bg-gradient-to-br from-red-600 to-red-800'
  },
  {
    title: 'Laser Printing',
    description: 'Precision laser printing for documents, brochures, and high-quality prints.',
    icon: 'fas fa-bolt',
    color: 'bg-gradient-to-br from-red-600 to-red-800'
  },
  {
    title: 'Design Services',
    description: 'Creative design solutions to bring your ideas to life before printing.',
    icon: 'fas fa-palette',
    color: 'bg-gradient-to-br from-red-600 to-red-800'
  }
]

const portfolioItems = [
  {
    title: 'Corporate Branding',
    description: 'Complete branding package for a local business including business cards and banners.',
    icon: 'fas fa-building'
  },
  {
    title: 'Event Promotions',
    description: 'Promotional materials for a large community event with flex banners and flyers.',
    icon: 'fas fa-calendar-alt'
  },
  {
    title: 'Custom Apparel',
    description: 'Branded t-shirts and uniforms for a sports team with custom cloth printing.',
    icon: 'fas fa-tshirt'
  },
  {
    title: 'Product Packaging',
    description: 'Eye-catching packaging solutions for a new product launch.',
    icon: 'fas fa-box-open'
  },
  {
    title: 'Restaurant Menu',
    description: 'Elegant menu design and printing for a high-end restaurant.',
    icon: 'fas fa-utensils'
  },
  {
    title: 'Wedding Invitations',
    description: 'Custom designed and printed wedding invitations with premium finishes.',
    icon: 'fas fa-heart'
  }
]

// Scroll handler
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// GSAP Animations
const initAnimations = () => {
  // Register ScrollTrigger plugin
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
    
    // Hero section animations
    gsap.fromTo(badge.value, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    
    gsap.fromTo(heroTitle.value, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
    )
    
    gsap.fromTo(heroText.value, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
    )
    
    gsap.fromTo(heroButtons.value, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power2.out' }
    )
    
    // Floating elements in hero
    gsap.to(floatingCard.value, {
      y: -10,
      rotation: -3,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
    
    gsap.to(floatingMug.value, {
      y: -15,
      rotation: 8,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.5
    })
    
    gsap.to(floatingCloth.value, {
      y: -12,
      rotation: 2,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.3
    })
    
    gsap.to(floatingLaser.value, {
      y: -8,
      rotation: -4,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.7
    })
    
    // Background shapes animation
    gsap.to(floatingShapes.value.children, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    })
    
    // Services section animations
    gsap.fromTo(servicesTitle.value, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: servicesTitle.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
    
    gsap.fromTo(servicesSubtitle.value, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: servicesSubtitle.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
    
    serviceCards.value.forEach((card, index) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    })
    
    // Portfolio section animations
    gsap.fromTo(portfolioTitle.value, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: portfolioTitle.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
    
    gsap.fromTo(portfolioSubtitle.value, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: portfolioSubtitle.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
    
    portfolioCards.value.forEach((card, index) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    })
    
    // CTA section animations
    gsap.fromTo(ctaTitle.value, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ctaTitle.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
    
    gsap.fromTo(ctaText.value, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: ctaText.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
    
    gsap.fromTo(ctaButtons.value, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.4,
      scrollTrigger: {
        trigger: ctaButtons.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll)
    // Initialize animations after a short delay to ensure DOM is ready
    setTimeout(initAnimations, 100)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Custom pattern background */
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23dc2626' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}

/* Custom scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>