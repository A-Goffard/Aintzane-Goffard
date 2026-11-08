<template>
  <HeroSection />
  <SobreMiSection />
  <TrayectoriaSection />
  <PedagogiaSection />
  <ProyectosSection />
  <FormacionSection />
  <CienciaSection />
  <CompetenciasSection />
  <ContactoSection />
</template>

<script setup>
import { useHead } from '@vueuse/head'
import HeroSection from '../components/secciones/HeroSection.vue'
import SobreMiSection from '../components/secciones/SobreMiSection.vue'
import TrayectoriaSection from '../components/secciones/TrayectoriaSection.vue'
import PedagogiaSection from '../components/secciones/PedagogiaSection.vue'
import ProyectosSection from '../components/secciones/ProyectosSection.vue'
import FormacionSection from '../components/secciones/FormacionSection.vue'
import CienciaSection from '../components/secciones/CienciaSection.vue'
import CompetenciasSection from '../components/secciones/CompetenciasSection.vue'
import ContactoSection from '../components/secciones/ContactoSection.vue'

useHead({
  title: 'Aintzane Goffard | Docencia, STEAM, EdTech y Ciencia',
  link: [{ rel: 'canonical', href: 'https://aintzanegoffard.com/' }]
})
</script>
