<template>
  <section id="pedagogia" class="section" aria-labelledby="pedagogia-title">
    <div class="container">
      <div class="pedagogia">
        <div class="section-head" v-reveal>
          <p class="eyebrow">Pedagogía y STEAM</p>
          <h2 id="pedagogia-title" class="section-title">Aprender haciendo, aprender todas las personas</h2>
          <p class="section-intro">
            Diseño actividades, recursos y formaciones que conectan el aprendizaje con situaciones reales,
            partiendo del Diseño Universal para el Aprendizaje.
          </p>
          <blockquote class="cita">
            «Reducir barreras y ofrecer distintas formas de acceder al contenido, participar y demostrar lo aprendido.»
          </blockquote>
        </div>

        <ol class="areas">
          <li v-for="(a, i) in areasPedagogia" :key="a.titulo" class="area" v-reveal="i * 80">
            <span class="area__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <h3 class="area__titulo">{{ a.titulo }}</h3>
              <p v-if="a.entidad" class="area__entidad">
                <a v-if="a.enlace" :href="a.enlace" target="_blank" rel="noopener noreferrer">{{ a.entidad }}</a>
                <template v-else>{{ a.entidad }}</template>
              </p>
              <p class="area__texto">{{ a.texto }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { areasPedagogia } from '../../data/pedagogia'
</script>

<style scoped>
.pedagogia {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(32px, 6vw, 72px);
  align-items: start;
}

.pedagogia .section-head {
  position: sticky;
  top: calc(var(--header-h) + 24px);
  margin-bottom: 0;
}

.cita {
  margin: 28px 0 0;
  padding: 20px 24px;
  border-radius: var(--radius);
  background: var(--primary-soft);
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.15rem;
  color: var(--primary-strong);
}

.areas {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
}

.area {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  padding: 24px;
  border-radius: var(--radius);
  background: var(--surface);
  border: 1px solid var(--border);
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.area:hover { border-color: var(--primary); transform: translateY(-2px); }

.area__num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
  color: var(--accent);
  opacity: 0.8;
}

.area__titulo { font-size: 1.25rem; margin-bottom: 4px; }

.area__entidad {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.area__texto { color: var(--muted); }

@media (max-width: 860px) {
  .pedagogia { grid-template-columns: 1fr; }
  .pedagogia .section-head { position: static; }
}
</style>
