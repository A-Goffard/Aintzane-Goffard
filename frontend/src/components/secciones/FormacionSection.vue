<template>
  <section id="formacion" class="section" aria-labelledby="formacion-title">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Formación</p>
        <h2 id="formacion-title" class="section-title">Aprender sigue siendo parte del trabajo</h2>
      </div>

      <div class="cols">
        <div class="card col" v-reveal>
          <h3 class="col__title">Formación académica</h3>
          <ul class="lista">
            <li v-for="f in academica" :key="f.titulo" class="lista__item">
              <p class="lista__titulo">{{ f.titulo }}</p>
              <p class="lista__meta">
                <span class="lista__centro">{{ f.centro }}</span>
                <span v-if="f.nota"> · {{ f.nota }}</span>
              </p>
            </li>
          </ul>
        </div>

        <div class="card col" v-reveal="100">
          <h3 class="col__title">Certificaciones</h3>
          <ul class="lista">
            <li v-for="c in certificaciones" :key="c.titulo" class="lista__item">
              <p class="lista__titulo">{{ c.titulo }}</p>
              <p class="lista__meta">
                <span class="lista__centro">{{ c.codigo }}</span>
                <span v-if="c.nota"> · {{ c.nota }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <h3 class="esp__title" v-reveal>Áreas de especialización</h3>
      <ul class="esp">
        <li v-for="(e, i) in especializaciones" :key="e.titulo" class="esp__item" v-reveal="i * 80">
          <img :src="e.icono" alt="" width="56" height="56" loading="lazy">
          <h4>{{ e.titulo }}</h4>
          <p>{{ e.texto }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { academica, certificaciones, especializaciones } from '../../data/formacion'
</script>

<style scoped>
.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.col__title {
  font-size: 1.3rem;
  padding-bottom: 14px;
  margin-bottom: 8px;
  border-bottom: 2px solid var(--primary-soft);
}

.lista__item {
  padding: 14px 0;
  border-bottom: 1px dashed var(--border);
}

.lista__item:last-child { border-bottom: none; padding-bottom: 0; }

.lista__titulo {
  font-weight: 700;
  color: var(--fg);
  margin: 0 0 2px;
  line-height: 1.4;
}

.lista__meta { margin: 0; color: var(--muted); font-size: 0.95rem; }
.lista__centro { color: var(--accent); font-weight: 700; }

.esp__title {
  font-size: 1.4rem;
  margin: clamp(48px, 7vw, 72px) 0 24px;
}

.esp {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.esp__item {
  padding: 24px;
  border-radius: var(--radius);
  background: var(--surface-2);
  text-align: center;
}

.esp__item img {
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin: 0 auto 14px;
}

.esp__item h4 { font-size: 1.1rem; margin-bottom: 8px; }
.esp__item p { color: var(--muted); font-size: 0.95rem; margin: 0; }

@media (max-width: 960px) {
  .esp { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 720px) {
  .cols { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .esp { grid-template-columns: 1fr; }
}
</style>
