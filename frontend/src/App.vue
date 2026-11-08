<template>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <SiteHeader />
  <main id="contenido" tabindex="-1">
    <router-view />
  </main>
  <SiteFooter />
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
#contenido:focus { outline: none; }
</style>
