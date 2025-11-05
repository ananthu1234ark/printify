<template>
  <div class="min-h-screen bg-white overflow-hidden">
    <!-- Navigation -->
    <nav 
      class="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-500"
      :class="{ 'shadow-lg py-2': scrolled, 'py-4': !scrolled }"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center space-x-3">
           <img src="/png.png" alt="My Image" class="w-[150px]" />
        </div>
        
        <!-- Desktop Navigation -->
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
        
        <!-- Get Quote Button with WhatsApp Link -->
        <a 
          :href="contactInfo.whatsapp" 
          target="_blank"
          class="hidden md:flex px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 items-center"
        >
          <i class="fab fa-whatsapp mr-2"></i>
          Get Quote
        </a>
        
        <!-- Hamburger Button - CORRECTED -->
        <button 
          @click="toggleMenu" 
          class="md:hidden focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          <div class="w-6 h-0.5 bg-gray-700 mb-1 transition-transform" :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></div>
          <div class="w-6 h-0.5 bg-gray-700 mb-1 transition-opacity" :class="{ 'opacity-0': isMenuOpen }"></div>
          <div class="w-6 h-0.5 bg-gray-700 transition-transform" :class="{ '-rotate-45 -translate-y-1': isMenuOpen }"></div>
        </button>
      </div>
      
      <!-- Mobile Menu - CORRECTED -->
      <div
        v-show="isMenuOpen"
        class="md:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden"
        :class="isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'"
      >
        <div class="container mx-auto px-4">
          <div class="flex flex-col space-y-4">
            <a 
              v-for="(item, index) in navItems" 
              :key="index"
              :href="item.href" 
              @click="closeMenu"
              class="font-medium text-gray-700 hover:text-red-600 transition-all duration-300 py-3 border-b border-gray-100 hover:pl-2"
            >
              {{ item.name }}
            </a>
            <a 
              :href="contactInfo.whatsapp" 
              target="_blank"
              class="px-4 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-medium text-center mt-2 hover:shadow-lg transition-all duration-300"
              @click="closeMenu"
            >
              <i class="fab fa-whatsapp mr-2"></i>
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 relative overflow-hidden">
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0">
            <div class="relative">
              <!-- Animated badge -->
              <div class="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium mb-6 shadow-sm animate-fade-in-up">
                <span class="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Premium Printing Services in Marad, Kochi
              </div>
              
              <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animate-delay-100">
                Your Vision, 
                <span class="text-gradient">Printed Perfectly</span>
              </h1>
              
              <p class="text-xl text-gray-600 mb-8 max-w-lg animate-fade-in-up animate-delay-200">
                From business cards to large format banner prints, we bring your ideas to life with exceptional quality and attention to detail.
              </p>
              
              <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animate-delay-300">
                <a 
                  href="#services"
                  class="px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center animate-pulse-once group"
                >
                  <span>Explore Services</span>
                  <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
                <a 
                  href="#portfolio"
                  class="px-8 py-3.5 bg-white text-gray-800 border border-gray-300 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:border-red-300 group"
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
              <div class="absolute top-10 left-4 lg:left-10 w-40 h-52 bg-white rounded-xl shadow-2xl transform -rotate-6 border-2 border-red-100 animate-float-slow animate-delay-400">
                <div class="h-full flex items-center justify-center p-4">
                  <div class="text-center">
                    <i class="fas fa-id-card text-3xl text-red-600 mb-3 animate-bounce-slow"></i>
                    <p class="font-semibold text-gray-700">Cards</p>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-20 right-4 lg:right-10 w-32 h-32 bg-white rounded-full shadow-2xl transform rotate-12 border-2 border-red-100 animate-float-medium animate-delay-500">
                <div class="h-full flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-mug-hot text-2xl text-red-600 animate-wiggle"></i>
                  </div>
                </div>
              </div>
              
              <div class="absolute bottom-20 left-8 lg:left-16 w-36 h-36 bg-white rounded-xl shadow-2xl transform rotate-3 border-2 border-red-100 animate-float-slow animate-delay-600">
                <div class="h-full flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-tshirt text-2xl text-red-600 mb-2 animate-pulse-slow"></i>
                    <p class="font-semibold text-gray-700">Cloth</p>
                  </div>
                </div>
              </div>
              
              <div class="absolute bottom-10 right-8 lg:right-16 w-44 h-24 bg-white rounded-xl shadow-2xl transform -rotate-6 border-2 border-red-100 animate-float-medium animate-delay-700">
                <div class="h-full flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-bolt text-2xl text-red-600 mb-1 animate-ping-slow"></i>
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
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse-slow"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse-slow animate-delay-1000"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Printing Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">We offer a comprehensive range of printing solutions for all your needs</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index" 
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group overflow-hidden relative animate-fade-in-up"
            :style="`animation-delay: ${index * 100}ms`"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500" 
                 :class="service.color">
              <i :class="service.icon" class="text-2xl text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-red-700 transition-colors duration-300">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4 relative z-10">{{ service.description }}</p>
            <a 
              :href="service.link" 
              class="text-red-600 font-medium flex items-center group-hover:translate-x-1 transition-all duration-300 relative z-10 group"
            >
              Learn more
              <i class="fas fa-arrow-right ml-1 group-hover:translate-x-1 transition-transform duration-300"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 bg-white relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20 animate-pulse"></div>
      </div>
      
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">See examples of our recent work and printing projects</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(item, index) in portfolioItems" 
            :key="index"
            class="bg-gray-100 rounded-xl h-64 flex items-center justify-center overflow-hidden group relative animate-fade-in-up"
            :style="`animation-delay: ${index * 150}ms`"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="text-center p-4 relative z-10 transform group-hover:scale-105 transition-transform duration-500">
              <i :class="item.icon" class="text-4xl text-red-600 mb-3"></i>
              <p class="font-semibold text-gray-700">{{ item.title }}</p>
              <p class="text-gray-500 text-sm mt-2">{{ item.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white relative overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2 animate-fade-in-left">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">About Printify</h2>
            <p class="text-lg text-gray-600 mb-4">
              Printify is your trusted printing partner in Marad, Kochi, with years of experience in delivering high-quality printing solutions for businesses and individuals alike.
            </p>
            <p class="text-lg text-gray-600 mb-6">
              We specialize in a wide range of printing services including banner printing, business cards, cloth printing, mug printing, and laser printing. Our commitment to quality, attention to detail, and customer satisfaction sets us apart in the industry.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div class="flex items-center animate-fade-in-up" style="animation-delay: 100ms">
                <i class="fas fa-check-circle text-red-600 mr-3"></i>
                <span class="text-gray-700">Premium Quality Materials</span>
              </div>
              <div class="flex items-center animate-fade-in-up" style="animation-delay: 200ms">
                <i class="fas fa-check-circle text-red-600 mr-3"></i>
                <span class="text-gray-700">Fast Turnaround Times</span>
              </div>
              <div class="flex items-center animate-fade-in-up" style="animation-delay: 300ms">
                <i class="fas fa-check-circle text-red-600 mr-3"></i>
                <span class="text-gray-700">Competitive Pricing</span>
              </div>
              <div class="flex items-center animate-fade-in-up" style="animation-delay: 400ms">
                <i class="fas fa-check-circle text-red-600 mr-3"></i>
                <span class="text-gray-700">Expert Design Assistance</span>
              </div>
            </div>
            <div class="animate-fade-in-up" style="animation-delay: 500ms">
              <a 
                href="#contact" 
                class="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-block transform hover:-translate-y-1"
              >
                Learn More About Us
              </a>
            </div>
          </div>
          <div class="lg:w-1/2 animate-fade-in-right">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-50 to-red-100 h-96 flex items-center justify-center group">
              <div class="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="text-center p-8 relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                <i class="fas fa-print text-6xl text-red-600 mb-4 animate-bounce-slow"></i>
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
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full opacity-10 -translate-y-32 translate-x-32 animate-pulse-slow"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-red-100 rounded-full opacity-10 translate-y-32 -translate-x-32 animate-pulse-slow animate-delay-1000"></div>
      </div>
      
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Contact Printify</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Get in touch with us for all your printing needs in Kochi</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="animate-fade-in-left">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-start animate-fade-in-up" style="animation-delay: 100ms">
                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-envelope text-red-600 group-hover:animate-wiggle"></i>
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
              <div class="flex items-start animate-fade-in-up" style="animation-delay: 200ms">
                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-phone text-red-600 group-hover:animate-wiggle"></i>
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
              <div class="flex items-start animate-fade-in-up" style="animation-delay: 300ms">
                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                  <i class="fab fa-whatsapp text-red-600 group-hover:animate-wiggle"></i>
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
              <div class="flex items-start animate-fade-in-up" style="animation-delay: 400ms">
                <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-map-marker-alt text-red-600 group-hover:animate-wiggle"></i>
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
            <div class="mt-8 animate-fade-in-up" style="animation-delay: 500ms">
              <h4 class="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a 
                  v-for="(social, index) in socialMedia" 
                  :key="index"
                  :href="social.link" 
                  target="_blank"
                  class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  :aria-label="`Follow us on ${social.name}`"
                  :style="`animation-delay: ${index * 100}ms`"
                >
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Map -->
          <div class="rounded-2xl overflow-hidden shadow-xl h-96 animate-fade-in-right">
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
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-white opacity-20 animate-pulse"></div>
        <div class="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full opacity-10 animate-ping-slow"></div>
        <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full opacity-10 animate-ping-slow animate-delay-1000"></div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Bring Your Ideas to Life?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up animate-delay-100">Contact us today for a free quote on your next printing project</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animate-delay-200">
          <a 
            :href="contactInfo.whatsapp" 
            target="_blank"
            class="px-8 py-3.5 bg-white text-red-600 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block animate-pulse-once"
          >
            Get Free Quote
          </a>
          <a 
            :href="contactInfo.mapLink" 
            target="_blank"
            class="px-8 py-3.5 bg-transparent border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 inline-block transform hover:-translate-y-1"
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
          <div class="md:col-span-2 animate-fade-in-up">
            <div class="flex items-center space-x-3 mb-4">
              <img src="/png.png" alt="My Image" class="w-[300px]" />
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
                class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                :aria-label="`Follow us on ${social.name}`"
              >
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
          
          <div class="animate-fade-in-up" style="animation-delay: 100ms">
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li v-for="(item, index) in navItems" :key="index">
                <a :href="item.href" class="text-gray-400 hover:text-white transition-colors">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          
          <div class="animate-fade-in-up" style="animation-delay: 200ms">
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
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in-up" style="animation-delay: 300ms">
          <p>&copy; {{ new Date().getFullYear() }} Printify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// State
const isMenuOpen = ref(false)
const scrolled = ref(false)

// Navigation Items
const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

// Services
const services = [
  {
    title: 'Banner Printing',
    description: 'High-quality large format printing for banners, hoardings, and signage.',
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

// Portfolio Items
const portfolioItems = [
  { title: 'Project Gallery', subtitle: 'Coming Soon', icon: 'fas fa-images' },
  { title: 'Business Cards', subtitle: 'Premium Quality', icon: 'fas fa-id-card' },
  { title: 'Cloth Printing', subtitle: 'Custom Designs', icon: 'fas fa-tshirt' },
  { title: 'Banner Prints', subtitle: 'Large Format', icon: 'fas fa-scroll' },
  { title: 'Mug Printing', subtitle: 'Personalized', icon: 'fas fa-mug-hot' },
  { title: 'Laser Prints', subtitle: 'High Precision', icon: 'fas fa-bolt' }
]

// Contact Info
const contactInfo = {
  email: 'Printifycochin@gmail.com',
  emailSubject: 'We have a print question',
  phone: '+91 8129067610',
  whatsapp: 'https://wa.me/+918129067610',
  address: 'Marad, Kochi, Kerala, India - 682304',
  mapLink: 'https://maps.app.goo.gl/7gVxi4LpEVajh84U8'
}

// Social Media
const socialMedia = [
  { name: 'Facebook', icon: 'fab fa-facebook-f', link: 'https://facebook.com/printify_cochin' },
  { name: 'Instagram', icon: 'fab fa-instagram', link: 'https://instagram.com/printify_cochin' },
  { name: 'Twitter', icon: 'fab fa-twitter', link: 'https://twitter.com/printify_cochin' },
  { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: 'https://wa.me/+918129067610' },
  { name: 'Email', icon: 'fas fa-envelope', link: 'mailto:Printifycochin@gmail.com' }
]

// Methods
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    scrolled.value = window.scrollY > 50
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<style scoped>
.text-gradient {
  background: linear-gradient(to right, #dc2626, #7f1d1d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}

/* Enhanced Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes floatSlow {
  0%, 100% {
    transform: translateY(0) rotate(-6deg);
  }
  50% {
    transform: translateY(-20px) rotate(-6deg);
  }
}

@keyframes floatMedium {
  0%, 100% {
    transform: translateY(0) rotate(12deg);
  }
  50% {
    transform: translateY(-15px) rotate(12deg);
  }
}

@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes wiggle {
  0%, 100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
}

@keyframes pingSlow {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

@keyframes pulseOnce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

.animate-float-slow {
  animation: floatSlow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: floatMedium 4s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounceSlow 3s ease-in-out infinite;
}

.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

.animate-ping-slow {
  animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-pulse-once {
  animation: pulseOnce 2s ease-in-out;
}

.animate-delay-100 {
  animation-delay: 100ms;
}

.animate-delay-200 {
  animation-delay: 200ms;
}

.animate-delay-300 {
  animation-delay: 300ms;
}

.animate-delay-400 {
  animation-delay: 400ms;
}

.animate-delay-500 {
  animation-delay: 500ms;
}

.animate-delay-600 {
  animation-delay: 600ms;
}

.animate-delay-700 {
  animation-delay: 700ms;
}

.animate-delay-1000 {
  animation-delay: 1000ms;
}
</style>