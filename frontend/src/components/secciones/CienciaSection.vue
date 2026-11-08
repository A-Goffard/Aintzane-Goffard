<template>
  <section id="ciencia" class="section section--ciencia" aria-labelledby="ciencia-title">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Ciencia</p>
        <h2 id="ciencia-title" class="section-title">Publicaciones científicas</h2>
        <p class="section-intro">
          Mi etapa de investigación en geología y micropaleontología se centró en la evolución ambiental,
          los registros sedimentarios y la huella humana en los ecosistemas costeros del Golfo de Bizkaia.
        </p>
      </div>

      <ol class="pubs">
        <li v-for="(p, i) in publicaciones" :key="p.url" class="pub" v-reveal="i * 70">
          <span class="pub__anio">{{ p.anio }}</span>
          <div class="pub__body">
            <h3 class="pub__titulo">
              <a :href="p.url" target="_blank" rel="noopener noreferrer">
                {{ p.titulo }}
                <span class="sr-only">(se abre en ResearchGate)</span>
              </a>
            </h3>
            <p class="pub__medio">{{ p.medio }}</p>
            <p class="pub__resumen">{{ p.resumen }}</p>
          </div>
          <AppIcon name="external" class="pub__ext" />
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import AppIcon from '../AppIcon.vue'
import { publicaciones } from '../../data/publicaciones'
</script>

<style scoped>
.section--ciencia {
  background: var(--surface-2);
}

.section--ciencia .eyebrow { color: var(--leaf); }

.pubs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
}

.pub {
  position: relative;
  display: grid;
  grid-template-columns: 84px 1fr auto;
  gap: 20px;
  align-items: start;
  padding: 24px;
  border-radius: var(--radius);
  background: var(--surface);
  border: 1px solid var(--border);
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.pub:hover { border-color: var(--leaf); transform: translateX(4px); }

.pub__anio {
  display: grid;
  place-items: center;
  height: 52px;
  border-radius: 12px;
  background: var(--leaf-soft);
  color: var(--leaf);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
}

.pub__titulo {
  font-size: 1.15rem;
  line-height: 1.35;
  margin-bottom: 6px;
}

.pub__titulo a {
  color: var(--primary-strong);
  text-decoration: none;
}

.pub__titulo a::after {
  content: '';
  position: absolute;
  inset: 0;
}

.pub__titulo a:hover { color: var(--leaf); }

.pub__medio {
  font-size: 0.9rem;
  font-weight: 700;
  font-style: italic;
  color: var(--leaf);
  margin-bottom: 6px;
}

.pub__resumen { color: var(--muted); margin: 0; }

.pub__ext { color: var(--muted); margin-top: 4px; }

@media (max-width: 640px) {
  .pub { grid-template-columns: 1fr; gap: 12px; }
  .pub__anio { justify-self: start; height: auto; padding: 4px 12px; }
  .pub__ext { display: none; }
}
</style>
