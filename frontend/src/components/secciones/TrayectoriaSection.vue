<template>
  <section id="trayectoria" class="section section--alt" aria-labelledby="trayectoria-title">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Trayectoria</p>
        <h2 id="trayectoria-title" class="section-title">Del laboratorio al aula, y del aula al código</h2>
        <p class="section-intro">Investigación, docencia y desarrollo: tres caminos que se han ido entrelazando.</p>
      </div>

      <div class="leyenda" aria-hidden="true">
        <span class="leyenda__item leyenda__item--docencia">Docencia</span>
        <span class="leyenda__item leyenda__item--ciencia">Ciencia y divulgación</span>
        <span class="leyenda__item leyenda__item--tecnologia">Tecnología</span>
      </div>

      <ol class="timeline">
        <li
          v-for="(item, i) in trayectoria"
          :key="item.entidad + item.puesto"
          class="timeline__item"
          :class="'timeline__item--' + item.area"
          v-reveal="(i % 3) * 80"
        >
          <span class="timeline__dot" aria-hidden="true"></span>
          <article class="card timeline__card">
            <p class="timeline__periodo">{{ item.periodo }}</p>
            <h3 class="timeline__puesto">{{ item.puesto }}</h3>
            <p class="timeline__entidad">
              <a v-if="item.enlace" :href="item.enlace" target="_blank" rel="noopener noreferrer">{{ item.entidad }}</a>
              <template v-else>{{ item.entidad }}</template>
            </p>
            <p class="timeline__texto">{{ item.texto }}</p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { trayectoria } from '../../data/trayectoria'
</script>

<style scoped>
.leyenda {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin-bottom: 32px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--muted);
}

.leyenda__item { display: inline-flex; align-items: center; gap: 8px; }
.leyenda__item::before {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--c);
}

.leyenda__item--docencia,
.timeline__item--docencia { --c: var(--accent); }
.leyenda__item--ciencia,
.timeline__item--ciencia { --c: var(--leaf); }
.leyenda__item--tecnologia,
.timeline__item--tecnologia { --c: var(--sky); }

.timeline {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 0 0 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(var(--border), var(--primary-soft));
}

.timeline__item {
  position: relative;
  margin-bottom: 20px;
}

.timeline__dot {
  position: absolute;
  left: -40px;
  top: 26px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--surface-2);
  border: 3px solid var(--c);
}

.timeline__dot::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: var(--c);
}

.timeline__card {
  border-left: 4px solid var(--c);
  transition: transform 0.25s ease;
}

.timeline__card:hover { transform: translateX(4px); }

.timeline__periodo {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c);
}

.timeline__puesto { font-size: 1.3rem; margin-bottom: 4px; }

.timeline__entidad {
  font-weight: 700;
  color: var(--fg);
  margin-bottom: 10px;
}

.timeline__entidad a { color: inherit; }

.timeline__texto { color: var(--muted); }

@media (min-width: 900px) {
  /* En pantallas grandes, la línea va al centro y las tarjetas se alternan */
  .timeline { padding: 0; }
  .timeline::before { left: 50%; transform: translateX(-1px); }

  .timeline__item {
    width: 50%;
    padding-right: 48px;
  }

  .timeline__item:nth-child(even) {
    margin-left: 50%;
    padding-right: 0;
    padding-left: 48px;
  }

  .timeline__item:not(:first-child) { margin-top: -48px; }

  .timeline__dot { left: auto; right: -12px; }
  .timeline__item:nth-child(even) .timeline__dot { right: auto; left: -12px; }

  .timeline__item:nth-child(odd) .timeline__card { border-left: 1px solid var(--border); border-right: 4px solid var(--c); text-align: right; }
  .timeline__item:nth-child(odd) .timeline__card:hover { transform: translateX(-4px); }
}
</style>
