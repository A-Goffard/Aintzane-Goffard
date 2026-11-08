<template>
  <article class="pcard">
    <div class="pcard__cover" :class="'pcard__cover--' + (proyecto.tono || 'violeta')">
      <img
        v-if="proyecto.portada"
        :src="proyecto.portada"
        alt=""
        loading="lazy"
        decoding="async"
      >
      <template v-else>
        <svg class="pcard__estratos" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 110 C 80 80 160 80 240 105 S 360 135 400 115 V200 H0 Z" />
          <path d="M0 140 C 90 115 170 118 250 138 S 370 160 400 148 V200 H0 Z" />
          <path d="M0 170 C 100 150 180 152 260 168 S 370 185 400 178 V200 H0 Z" />
        </svg>
        <span class="pcard__inicial" aria-hidden="true">{{ proyecto.sigla || proyecto.titulo }}</span>
      </template>
      <span class="pcard__anio">{{ proyecto.anio }}</span>
    </div>

    <div class="pcard__body">
      <h3 class="pcard__titulo">
        <router-link :to="{ name: 'proyecto', params: { slug: proyecto.slug } }" class="pcard__link">
          {{ proyecto.titulo }}
        </router-link>
      </h3>
      <p class="pcard__resumen">{{ proyecto.resumen }}</p>
      <ul class="chips" aria-label="Tecnologías">
        <li v-for="t in proyecto.tecnologias.slice(0, 4)" :key="t" class="chip">{{ t }}</li>
      </ul>
      <span class="pcard__mas link-arrow" aria-hidden="true">
        Ver proyecto <AppIcon name="arrow-right" />
      </span>
    </div>
  </article>
</template>

<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  proyecto: { type: Object, required: true }
})
</script>

<style scoped>
.pcard {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius);
  background: var(--surface);
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pcard:hover,
.pcard:focus-within {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.pcard__cover {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--cover-bg);
  color: var(--cover-fg);
}

.pcard__cover--violeta { --cover-bg: var(--primary-soft); --cover-fg: var(--primary); }
.pcard__cover--verde { --cover-bg: var(--leaf-soft); --cover-fg: var(--leaf); }
.pcard__cover--azul { --cover-bg: var(--sky-soft); --cover-fg: var(--sky); }
.pcard__cover--arena { --cover-bg: var(--sand-soft); --cover-fg: var(--sand); }

.pcard__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.pcard:hover .pcard__cover img { transform: scale(1.05); }

.pcard__estratos {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.pcard__estratos path { fill: currentColor; }
.pcard__estratos path:nth-child(1) { opacity: 0.18; }
.pcard__estratos path:nth-child(2) { opacity: 0.3; }
.pcard__estratos path:nth-child(3) { opacity: 0.5; }

.pcard__inicial {
  position: absolute;
  top: 14%;
  left: 8%;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.2rem, 4vw, 2.8rem);
  line-height: 1;
  opacity: 0.9;
}

.pcard__anio {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--surface);
  color: var(--primary-strong);
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: var(--shadow);
}

.pcard__body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  padding: 22px 24px 24px;
}

.pcard__titulo { font-size: 1.25rem; }

.pcard__link {
  color: inherit;
  text-decoration: none;
}

/* Toda la tarjeta es clicable, pero el enlace real es el título (mejor para lectores de pantalla) */
.pcard__link::after {
  content: '';
  position: absolute;
  inset: 0;
}

.pcard__link:focus-visible { outline: none; }
.pcard:focus-within { outline: 3px solid var(--accent); outline-offset: 3px; }

.pcard__resumen { color: var(--muted); margin: 0; flex: 1; }

.pcard__mas { color: var(--accent); margin-top: 4px; }
</style>
