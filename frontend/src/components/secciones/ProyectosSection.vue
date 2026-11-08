<template>
  <section id="proyectos" class="section section--alt" aria-labelledby="proyectos-title">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Proyectos digitales y EdTech</p>
        <h2 id="proyectos-title" class="section-title">Tecnología al servicio de las personas</h2>
        <p class="section-intro">
          Webs, plataformas y experiencias interactivas que responden a necesidades concretas:
          desde gestionar información hasta aprender resolviendo retos.
        </p>
      </div>

      <ul class="grid">
        <li v-for="(p, i) in proyectosPortada" :key="p.slug" v-reveal="(i % 3) * 90">
          <ProyectoCard :proyecto="p" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import ProyectoCard from '../ProyectoCard.vue'
import { proyectosPortada } from '../../data/proyectos'
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 24px;
}
</style>
