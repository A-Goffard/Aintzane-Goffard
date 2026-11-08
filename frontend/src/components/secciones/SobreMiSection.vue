<template>
  <section id="sobre-mi" class="section" aria-labelledby="sobre-mi-title">
    <div class="container">
      <div class="sobre">
        <div class="section-head" v-reveal>
          <p class="eyebrow">Sobre mí</p>
          <h2 id="sobre-mi-title" class="section-title">Ciencia que se entiende, aulas con vida</h2>
        </div>
        <div class="sobre__texto" v-reveal="100">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-for="(p, i) in sobreMi" :key="i" v-html="p"></p>
          <p class="sobre__nota">
            Este portfolio sigue la misma filosofía: una web ligera y accesible, sin cookies ni rastreadores.
            <router-link :to="{ name: 'proyecto', params: { slug: 'portfolio-personal' } }">Así está hecho</router-link>.
          </p>
        </div>
      </div>

      <h3 class="pilares__title" v-reveal>Cómo trabajo</h3>
      <div class="pilares">
        <article
          v-for="(p, i) in pilares"
          :key="p.id"
          class="card pilar"
          :class="'pilar--' + p.id"
          v-reveal="i * 100"
        >
          <img :src="p.icono" alt="" width="64" height="64" loading="lazy" class="pilar__icono">
          <h4 class="pilar__titulo">{{ p.titulo }}</h4>
          <p>{{ p.texto }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { sobreMi, pilares } from '../../data/perfil'
</script>

<style scoped>
.sobre {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(24px, 5vw, 64px);
  align-items: start;
}

.sobre .section-head { margin-bottom: 0; }

.sobre__texto { font-size: 1.125rem; }
.sobre__texto :deep(strong) { color: var(--primary-strong); }

.sobre__nota {
  font-family: var(--font-display);
  font-style: italic;
  color: var(--muted);
  padding-left: 16px;
  border-left: 3px solid var(--accent);
}

.pilares__title {
  font-size: 1.4rem;
  margin: clamp(48px, 7vw, 80px) 0 24px;
}

.pilares {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.pilar {
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.pilar::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 5px;
  background: var(--pilar-color);
}

.pilar:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }

.pilar--ciencia { --pilar-color: var(--leaf); }
.pilar--docencia { --pilar-color: var(--accent); }
.pilar--tecnologia { --pilar-color: var(--sky); }

.pilar__icono {
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-bottom: 16px;
}

.pilar__titulo {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--pilar-color);
}

.pilar p { color: var(--muted); }

@media (max-width: 860px) {
  .sobre { grid-template-columns: 1fr; }
  .pilares { grid-template-columns: 1fr; }
}
</style>
