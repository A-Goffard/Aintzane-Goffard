<template>
  <section id="competencias" class="section" aria-labelledby="competencias-title">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Competencias</p>
        <h2 id="competencias-title" class="section-title">Caja de herramientas</h2>
      </div>

      <div class="comp">
        <div class="comp__grupos">
          <div v-for="(g, i) in competencias" :key="g.titulo" class="comp__grupo" v-reveal="i * 70">
            <h3>{{ g.titulo }}</h3>
            <ul class="chips">
              <li v-for="it in g.items" :key="it" class="chip">{{ it }}</li>
            </ul>
          </div>
        </div>

        <div class="card idiomas" v-reveal="150">
          <h3>Idiomas</h3>
          <ul>
            <li v-for="i in idiomas" :key="i.idioma" class="idioma">
              <div class="idioma__fila">
                <span class="idioma__nombre">{{ i.idioma }}</span>
                <span class="idioma__nivel">{{ i.nivel }}</span>
              </div>
              <div class="idioma__barra" aria-hidden="true">
                <span :style="{ width: i.valor + '%' }"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { competencias, idiomas } from '../../data/competencias'
</script>

<style scoped>
.comp {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}

.comp__grupos {
  display: grid;
  gap: 28px;
}

.comp__grupo h3 {
  font-size: 1.15rem;
  margin-bottom: 12px;
}

.comp__grupo:nth-child(2) .chip { background: var(--sky-soft); color: var(--sky); }
.comp__grupo:nth-child(3) .chip { background: var(--leaf-soft); color: var(--leaf); }
.comp__grupo:nth-child(4) .chip { background: var(--sand-soft); color: var(--sand); }

.idiomas h3 { font-size: 1.2rem; margin-bottom: 16px; }

.idioma + .idioma { margin-top: 18px; }

.idioma__fila {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.idioma__nombre { font-weight: 700; }
.idioma__nivel { color: var(--muted); }

.idioma__barra {
  height: 8px;
  border-radius: 999px;
  background: var(--surface-2);
  overflow: hidden;
}

.idioma__barra span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), var(--accent));
}

@media (max-width: 860px) {
  .comp { grid-template-columns: 1fr; }
}
</style>
