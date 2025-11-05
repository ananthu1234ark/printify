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
              <title>Printify Logo</title>
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
        
        <!-- Updated Get Quote Button with WhatsApp Link -->
        <a 
          :href="contactInfo.whatsapp" 
          target="_blank"
          class="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
        >
          <i class="fab fa-whatsapp mr-2"></i>
          Get Quote
        </a>
        
        <button class="md:hidden text-gray-700" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle mobile menu">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 relative overflow-hidden">
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0">
            <div class="relative">
              <!-- Animated badge -->
              <div 
                ref="badge"
                class="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium mb-6 shadow-sm opacity-0"
              >
                <span class="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Premium Printing Services in Marad, Kochi
              </div>
              
              <h1 
                ref="heroTitle"
                class="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight opacity-0"
              >
                Your Vision, 
                <span class="text-gradient">Printed Perfectly</span>
              </h1>
              
              <p 
                ref="heroText"
                class="text-xl text-gray-600 mb-8 max-w-lg opacity-0"
              >
                From business cards to large format flex prints, we bring your ideas to life with exceptional quality and attention to detail.
              </p>
              
              <div 
                ref="heroButtons"
                class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0"
              >
                <a 
                  href="#services"
                  class="px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <span>Explore Services</span>
                  <i class="fas fa-arrow-right ml-2"></i>
                </a>
                <a 
                  href="#portfolio"
                  class="px-8 py-3.5 bg-white text-gray-800 border border-gray-300 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <i class="fas fa-play-circle mr-2 text-red-600"></i>
                  <span>View Portfolio</span>
                </a>
              </div>
            </div>
          </div>
          
          <div class="lg:w-1/2 relative">
            <div class="relative h-96 lg:h-[500px]">
              <!-- Floating elements -->
              <div 
                ref="floatingCard"
                class="absolute top-10 left-4 lg:left-10 w-40 h-52 bg-white rounded-xl shadow-2xl transform -rotate-6 border-2 border-red-100 opacity-0"
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
                class="absolute top-20 right-4 lg:right-10 w-32 h-32 bg-white rounded-full shadow-2xl transform rotate-12 border-2 border-red-100 opacity-0"
              >
                <div class="h-full flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-mug-hot text-2xl text-red-600"></i>
                  </div>
                </div>
              </div>
              
              <div 
                ref="floatingCloth"
                class="absolute bottom-20 left-8 lg:left-16 w-36 h-36 bg-white rounded-xl shadow-2xl transform rotate-3 border-2 border-red-100 opacity-0"
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
                class="absolute bottom-10 right-8 lg:right-16 w-44 h-24 bg-white rounded-xl shadow-2xl transform -rotate-6 border-2 border-red-100 opacity-0"
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
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 ref="servicesTitle" class="text-4xl font-bold text-gray-900 mb-4 opacity-0">Our Printing Services</h2>
          <p ref="servicesSubtitle" class="text-xl text-gray-600 max-w-2xl mx-auto opacity-0">We offer a comprehensive range of printing solutions for all your needs</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index" 
            :ref="el => { if (el) serviceCards[index] = el }"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group overflow-hidden relative opacity-0"
          >
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10" 
                 :class="service.color">
              <i :class="service.icon" class="text-2xl text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 relative z-10">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4 relative z-10">{{ service.description }}</p>
            <a 
              :href="service.link" 
              class="text-red-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300 relative z-10"
            >
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
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">See examples of our recent work and printing projects</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <div class="text-center p-4">
              <i class="fas fa-images text-4xl text-red-600 mb-3"></i>
              <p class="font-semibold text-gray-700">Project Gallery</p>
              <p class="text-gray-500 text-sm mt-2">Coming Soon</p>
            </div>
          </div>
          <div class="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <div class="text-center p-4">
              <i class="fas fa-id-card text-4xl text-red-600 mb-3"></i>
              <p class="font-semibold text-gray-700">Business Cards</p>
              <p class="text-gray-500 text-sm mt-2">Premium Quality</p>
            </div>
          </div>
          <div class="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <div class="text-center p-4">
              <i class="fas fa-tshirt text-4xl text-red-600 mb-3"></i>
              <p class="font-semibold text-gray-700">Cloth Printing</p>
              <p class="text-gray-500 text-sm mt-2">Custom Designs</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white relative overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <h2 ref="aboutTitle" class="text-4xl font-bold text-gray-900 mb-6 opacity-0">About Printify</h2>
            <p ref="aboutText1" class="text-lg text-gray-600 mb-4 opacity-0">
              Printify is your trusted printing partner in Marad, Kochi, with years of experience in delivering high-quality printing solutions for businesses and individuals alike.
            </p>
            <p ref="aboutText2" class="text-lg text-gray-600 mb-6 opacity-0">
              We specialize in a wide range of printing services including flex printing, business cards, cloth printing, mug printing, and laser printing. Our commitment to quality, attention to detail, and customer satisfaction sets us apart in the industry.
            </p>
            <div ref="aboutFeatures" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 opacity-0">
              <div class="flex items-center">
                <i class="fas fa-check-circle text-red-600 mr-3"></i>
                <span class="text-gray-700">Premium Quality Materials</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check-circle text-red-600 mr-3"></i>
                <span class="text-gray-700">Fast Turnaround Times</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check-circle text-red-600 mr-3"></i>
                <span class="text-gray-700">Competitive Pricing</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check-circle text-red-600 mr-3"></i>
                <span class="text-gray-700">Expert Design Assistance</span>
              </div>
            </div>
            <div ref="aboutCta" class="opacity-0">
              <a 
                href="#contact" 
                class="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
              >
                Learn More About Us
              </a>
            </div>
          </div>
          <div class="lg:w-1/2">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-50 to-red-100 h-96 flex items-center justify-center">
              <div class="text-center p-8">
                <i class="fas fa-print text-6xl text-red-600 mb-4"></i>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Our Printing Facility</h3>
                <p class="text-gray-600">State-of-the-art equipment in Marad, Kochi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 ref="contactTitle" class="text-4xl font-bold text-gray-900 mb-4 opacity-0">Contact Printify</h2>
          <p ref="contactSubtitle" class="text-xl text-gray-600 max-w-2xl mx-auto opacity-0">Get in touch with us for all your printing needs in Kochi</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-envelope text-red-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <a 
                    :href="`mailto:${contactInfo.email}?subject=${encodeURIComponent(contactInfo.emailSubject)}`" 
                    class="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {{ contactInfo.email }}
                  </a>
                  <p class="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <!-- Phone -->
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-phone text-red-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <a 
                    :href="`tel:${contactInfo.phone}`" 
                    class="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {{ contactInfo.phone }}
                  </a>
                  <p class="text-sm text-gray-500 mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
              
              <!-- WhatsApp -->
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fab fa-whatsapp text-red-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <a 
                    :href="contactInfo.whatsapp" 
                    target="_blank"
                    class="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                  <p class="text-sm text-gray-500 mt-1">Quick responses during business hours</p>
                </div>
              </div>
              
              <!-- Address -->
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-map-marker-alt text-red-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Visit Our Store</h4>
                  <p class="text-gray-600">{{ contactInfo.address }}</p>
                  <a 
                    :href="contactInfo.mapLink" 
                    target="_blank"
                    class="text-sm text-red-600 hover:text-red-700 transition-colors mt-1 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Social Media -->
            <div class="mt-8">
              <h4 class="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a 
                  v-for="(social, index) in socialMedia" 
                  :key="index"
                  :href="social.link" 
                  target="_blank"
                  class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                  :aria-label="`Follow us on ${social.name}`"
                >
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Map -->
          <div class="rounded-2xl overflow-hidden shadow-xl h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.129007575663!2d76.32299027495682!3d9.938886100000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873d7cc22ea2b%3A0x9c9b6b8b6b8b6b8b!2sPrintify!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Printify Location in Marad, Kochi"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden">
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 ref="ctaTitle" class="text-4xl font-bold mb-6 opacity-0">Ready to Bring Your Ideas to Life?</h2>
        <p ref="ctaText" class="text-xl mb-8 max-w-2xl mx-auto opacity-90 opacity-0">Contact us today for a free quote on your next printing project</p>
        <div ref="ctaButtons" class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0">
          <a 
            :href="contactInfo.whatsapp" 
            target="_blank"
            class="px-8 py-3.5 bg-white text-red-600 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block"
          >
            Get Free Quote
          </a>
          <a 
            :href="contactInfo.mapLink" 
            target="_blank"
            class="px-8 py-3.5 bg-transparent border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 inline-block"
          >
            Visit Our Store
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <title>Printify Logo</title>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 class="text-xl font-bold">Printify</h3>
            </div>
            <p class="text-gray-400 mb-4 max-w-md">
              Your trusted printing partner in Marad, Kochi. We provide high-quality printing services with attention to detail and customer satisfaction.
            </p>
            <div class="flex space-x-4">
              <a 
                v-for="(social, index) in socialMedia" 
                :key="index"
                :href="social.link" 
                target="_blank"
                class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                :aria-label="`Follow us on ${social.name}`"
              >
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li v-for="(item, index) in navItems" :key="index">
                <a :href="item.href" class="text-gray-400 hover:text-white transition-colors">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-start">
                <i class="fas fa-map-marker-alt mr-2 mt-1 text-red-500"></i>
                <span>{{ contactInfo.address }}</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-phone mr-2 mt-1 text-red-500"></i>
                <a :href="`tel:${contactInfo.phone}`" class="hover:text-white transition-colors">{{ contactInfo.phone }}</a>
              </li>
              <li class="flex items-start">
                <i class="fas fa-envelope mr-2 mt-1 text-red-500"></i>
                <a :href="`mailto:${contactInfo.email}`" class="hover:text-white transition-colors">{{ contactInfo.email }}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} Printify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>



<script setup>
// ✅ Import ref and onMounted from Vue
import { ref, onMounted, onBeforeUnmount } from 'vue'

// ✅ Client-side only GSAP imports (will be loaded dynamically)
let gsap = null
let ScrollTrigger = null

// ✅ Refs
const nav = ref(null)
const badge = ref(null)
const heroTitle = ref(null)
const heroText = ref(null)
const heroButtons = ref(null)
const floatingCard = ref(null)
const floatingMug = ref(null)
const floatingCloth = ref(null)
const floatingLaser = ref(null)
const servicesTitle = ref(null)
const servicesSubtitle = ref(null)
const serviceCards = ref([])
const aboutTitle = ref(null)
const aboutText1 = ref(null)
const aboutText2 = ref(null)
const aboutFeatures = ref(null)
const aboutCta = ref(null)
const contactTitle = ref(null)
const contactSubtitle = ref(null)
const ctaTitle = ref(null)
const ctaText = ref(null)
const ctaButtons = ref(null)

// ✅ State
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

// ✅ Data
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
    color: 'bg-gradient-to-br from-red-600 to-red-800',
    link: '#contact'
  },
  {
    title: 'Business Cards',
    description: 'Professionally designed and printed business cards that make a lasting impression.',
    icon: 'fas fa-id-card',
    color: 'bg-gradient-to-br from-red-600 to-red-800',
    link: '#contact'
  },
  {
    title: 'Cloth Printing',
    description: 'Custom printing on various fabrics for uniforms, promotional items, and more.',
    icon: 'fas fa-tshirt',
    color: 'bg-gradient-to-br from-red-600 to-red-800',
    link: '#contact'
  },
  {
    title: 'Mug Printing',
    description: 'Personalized mug printing perfect for gifts, promotions, and special occasions.',
    icon: 'fas fa-mug-hot',
    color: 'bg-gradient-to-br from-red-600 to-red-800',
    link: '#contact'
  },
  {
    title: 'Laser Printing',
    description: 'Precision laser printing for documents, brochures, and high-quality prints.',
    icon: 'fas fa-bolt',
    color: 'bg-gradient-to-br from-red-600 to-red-800',
    link: '#contact'
  },
  {
    title: 'Design Services',
    description: 'Creative design solutions to bring your ideas to life before printing.',
    icon: 'fas fa-palette',
    color: 'bg-gradient-to-br from-red-600 to-red-800',
    link: '#contact'
  }
]

const contactInfo = {
  email: 'Printifycochin@gmail.com',
  emailSubject: 'We have a print question',
  phone: '+91 8129067610',
  whatsapp: 'https://wa.me/+918129067610',
  address: 'Marad, Kochi, Kerala, India - 682304',
  mapLink: 'https://maps.app.goo.gl/7gVxi4LpEVajh84U8'
}

const socialMedia = [
  { name: 'Facebook', icon: 'fab fa-facebook-f', link: 'https://facebook.com/printifykochi' },
  { name: 'Instagram', icon: 'fab fa-instagram', link: 'https://instagram.com/printifykochi' },
  { name: 'Twitter', icon: 'fab fa-twitter', link: 'https://twitter.com/printifykochi' },
  { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: 'https://wa.me/+918129067610' },
  { name: 'Email', icon: 'fas fa-envelope', link: 'mailto:Printifycochin@gmail.com' }
]

// ✅ SEO Meta
useSeoMeta({
  title: 'Printify - Premium Printing Services in Marad, Kochi',
  description: 'Printify offers high-quality printing services in Marad, Kochi including flex printing, business cards, cloth printing, mug printing, and laser printing.',
  ogTitle: 'Printify - Premium Printing Services in Marad, Kochi',
  ogDescription: 'Your trusted printing partner in Kochi for all your printing needs with exceptional quality and attention to detail.',
  ogImage: '/images/printify-og.jpg',
  twitterCard: 'summary_large_image'
})

// ✅ JSON-LD Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Printify',
        description: 'Premium Printing Services in Marad, Kochi',
        url: 'https://yourwebsite.com',
        telephone: '+91-8129067610',
        email: 'Printifycochin@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Marad',
          addressLocality: 'Kochi',
          addressRegion: 'Kerala',
          postalCode: '682304',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '9.9388861',
          longitude: '76.3255651'
        },
        openingHours: 'Mo-Sa 09:00-19:00',
        sameAs: socialMedia.map(s => s.link)
      })
    }
  ]
})

// ✅ Scroll Handler
const handleScroll = () => {
  if (process.client) {
    scrolled.value = window.scrollY > 50
  }
}

// ✅ GSAP Animations - Client only
const initAnimations = () => {
  // Check if we're on client side and GSAP is loaded
  if (!process.client || !gsap || !ScrollTrigger) {
    console.warn('GSAP not available for animations')
    return
  }

  // Hero animations
  if (badge.value && heroTitle.value && heroText.value && heroButtons.value) {
    const heroTl = gsap.timeline()

    heroTl
      .to(badge.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to(heroTitle.value, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.5')
      .to(heroText.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.7')
      .to(heroButtons.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
  }

  // Floating elements animations
  const floatItems = [
    { el: floatingCard, delay: 1 },
    { el: floatingMug, delay: 1.2 },
    { el: floatingCloth, delay: 1.4 },
    { el: floatingLaser, delay: 1.6 }
  ]

  floatItems.forEach(({ el, delay }) => {
    if (el.value) {
      gsap.to(el.value, {
        opacity: 1,
        y: -10,
        duration: 1.5,
        ease: 'power2.out',
        delay
      })
    }
  })

  // Continuous floating loop
  const floatingElements = [
    floatingCard.value,
    floatingMug.value, 
    floatingCloth.value,
    floatingLaser.value
  ].filter(el => el !== null)

  if (floatingElements.length > 0) {
    gsap.to(floatingElements, {
      y: '+=10',
      rotation: '+=2',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }

  // Scroll-triggered animations
  const fadeUp = (el, delay = 0) => {
    if (el && ScrollTrigger) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: 'power2.out',
          scrollTrigger: { 
            trigger: el, 
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }

  // Apply fade-up animations to elements
  if (servicesTitle.value) fadeUp(servicesTitle.value)
  if (servicesSubtitle.value) fadeUp(servicesSubtitle.value)
  
  serviceCards.value.forEach((card, i) => {
    if (card) fadeUp(card, i * 0.1)
  })
  
  if (aboutTitle.value) fadeUp(aboutTitle.value)
  if (aboutText1.value) fadeUp(aboutText1.value)
  if (aboutText2.value) fadeUp(aboutText2.value)
  if (aboutFeatures.value) fadeUp(aboutFeatures.value)
  if (aboutCta.value) fadeUp(aboutCta.value)
  if (contactTitle.value) fadeUp(contactTitle.value)
  if (contactSubtitle.value) fadeUp(contactSubtitle.value)
  if (ctaTitle.value) fadeUp(ctaTitle.value)
  if (ctaText.value) fadeUp(ctaText.value)
  if (ctaButtons.value) fadeUp(ctaButtons.value)
}

// ✅ Load GSAP dynamically only on client
const loadGSAP = async () => {
  if (process.client) {
    try {
      // Dynamically import GSAP
      const gsapModule = await import('gsap')
      const scrollTriggerModule = await import('gsap/ScrollTrigger')
      
      gsap = gsapModule.default
      ScrollTrigger = scrollTriggerModule.default
      
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger)
      
      console.log('GSAP loaded successfully')
      return true
    } catch (error) {
      console.error('Failed to load GSAP:', error)
      return false
    }
  }
  return false
}

// ✅ Lifecycle Hooks
onMounted(async () => {
  // Only run on client side
  if (process.client) {
    // Load GSAP first
    const gsapLoaded = await loadGSAP()
    
    // Set up scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initialize animations if GSAP loaded successfully
    if (gsapLoaded) {
      // Small delay to ensure DOM is fully ready
      setTimeout(() => {
        initAnimations()
      }, 100)
    } else {
      // Fallback: Simple fade-in if GSAP fails
      document.querySelectorAll('.opacity-0').forEach(el => {
        el.classList.remove('opacity-0')
        el.classList.add('opacity-100', 'transition-opacity', 'duration-500')
      })
    }
  }
})

onBeforeUnmount(() => {
  // Clean up event listeners
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
    
    // Kill all GSAP animations
    if (ScrollTrigger) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }
})

// ✅ Service card ref setter
const setServiceCardRef = (el, index) => {
  if (el && serviceCards.value) {
    serviceCards.value[index] = el
  }
}
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #dc2626, #7f1d1d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>