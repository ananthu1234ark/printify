<template>
  test
</template>

<script setup>
// ✅ Import GSAP
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ✅ Register ScrollTrigger (only on client)
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

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
  scrolled.value = window.scrollY > 50
}

// ✅ GSAP Animations
const initAnimations = () => {
  // Hero
  const heroTl = gsap.timeline()

  heroTl
    .to(badge.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
    .to(heroTitle.value, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.5')
    .to(heroText.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.7')
    .to(heroButtons.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')

  // Floating elements
  const floatItems = [
    { el: floatingCard, delay: 1 },
    { el: floatingMug, delay: 1.2 },
    { el: floatingCloth, delay: 1.4 },
    { el: floatingLaser, delay: 1.6 }
  ]

  floatItems.forEach(({ el, delay }) => {
    gsap.to(el.value, {
      opacity: 1,
      y: -10,
      duration: 1.5,
      ease: 'power2.out',
      delay
    })
  })

  // Continuous floating loop
  gsap.to(
    [floatingCard.value, floatingMug.value, floatingCloth.value, floatingLaser.value],
    {
      y: '+=10',
      rotation: '+=2',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    }
  )

  // Scroll-triggered section fades
  const fadeUp = (el, delay = 0) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' }
      }
    )
  }

  fadeUp(servicesTitle.value)
  fadeUp(servicesSubtitle.value)
  serviceCards.value.forEach((card, i) => fadeUp(card, i * 0.1))
  fadeUp(aboutTitle.value)
  fadeUp(aboutText1.value)
  fadeUp(aboutText2.value)
  fadeUp(aboutFeatures.value)
  fadeUp(aboutCta.value)
  fadeUp(contactTitle.value)
  fadeUp(contactSubtitle.value)
  fadeUp(ctaTitle.value)
  fadeUp(ctaText.value)
  fadeUp(ctaButtons.value)
}

// ✅ Lifecycle Hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  initAnimations()
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
</style>