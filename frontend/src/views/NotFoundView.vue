<template>
  <section class="page nf">
    <div class="container nf__inner">
      <p class="nf__code" aria-hidden="true">404</p>
      <h1 class="nf__title">Este estrato no aparece en el registro</h1>
      <p class="nf__text">La página que buscas no existe o ha cambiado de sitio.</p>
      <router-link to="/" class="btn btn--primary">
        <AppIcon name="arrow-left" /> Volver al inicio
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import AppIcon from '../components/AppIcon.vue'

useHead({
  title: 'Página no encontrada | Aintzane Goffard',
  meta: [{ name: 'robots', content: 'noindex' }]
})
</script>

<style scoped>
.nf { min-height: 70vh; display: grid; align-items: center; }
.nf__inner { text-align: center; }

.nf__code {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(5rem, 18vw, 9rem);
  line-height: 1;
  margin: 0 0 8px;
  background: linear-gradient(180deg, var(--primary) 0 33%, var(--accent) 33% 66%, var(--leaf) 66%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.nf__title { font-size: clamp(1.6rem, 4vw, 2.2rem); margin-bottom: 12px; }
.nf__text { color: var(--muted); margin-bottom: 28px; }
</style>
