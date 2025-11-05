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

