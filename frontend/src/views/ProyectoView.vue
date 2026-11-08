<template>
  <article v-if="proyecto" class="page proyecto">
    <div class="container">
      <router-link :to="{ path: '/', hash: '#proyectos' }" class="volver link-arrow">
        <AppIcon name="arrow-left" /> Todos los proyectos
      </router-link>

      <header class="proyecto__head">
        <p class="eyebrow">{{ proyecto.anio }} · {{ proyecto.estado }}</p>
        <h1 class="proyecto__titulo">{{ proyecto.titulo }}</h1>
        <p class="proyecto__resumen">{{ proyecto.resumen }}</p>
        <ul class="chips" aria-label="Tecnologías y áreas">
          <li v-for="t in proyecto.tecnologias" :key="t" class="chip">{{ t }}</li>
        </ul>
      </header>

      <div class="proyecto__grid">
        <div class="proyecto__main">
          <p v-for="(d, i) in proyecto.descripcion" :key="i">{{ d }}</p>

          <div v-if="proyecto.imagenes" class="galeria">
            <figure v-for="img in proyecto.imagenes" :key="img.src">
              <img :src="img.src" :alt="img.alt" loading="lazy" decoding="async">
              <figcaption>{{ img.alt }}</figcaption>
            </figure>
          </div>
        </div>

        <aside class="proyecto__aside">
          <div class="card">
            <h2 class="aside__title">Mi papel</h2>
            <p>{{ proyecto.rol }}</p>
            <a
              v-if="proyecto.enlace"
              :href="proyecto.enlace.url"
              class="btn btn--primary aside__btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ proyecto.enlace.texto }}
              <AppIcon name="external" />
            </a>
          </div>

          <div v-if="proyecto.colaboradores" class="card colab">
            <h2 class="aside__title">Equipo</h2>
            <ul>
              <li v-for="c in proyecto.colaboradores" :key="c.nombre">
                <a :href="c.url" target="_blank" rel="noopener noreferrer">{{ c.nombre }}</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <nav class="siguiente" aria-label="Más proyectos">
        <router-link v-if="anterior" :to="{ name: 'proyecto', params: { slug: anterior.slug } }" class="siguiente__link">
          <span class="siguiente__label"><AppIcon name="arrow-left" :size="16" /> Anterior</span>
          <span class="siguiente__titulo">{{ anterior.titulo }}</span>
        </router-link>
        <span v-else></span>
        <router-link v-if="siguiente" :to="{ name: 'proyecto', params: { slug: siguiente.slug } }" class="siguiente__link siguiente__link--next">
          <span class="siguiente__label">Siguiente <AppIcon name="arrow-right" :size="16" /></span>
          <span class="siguiente__titulo">{{ siguiente.titulo }}</span>
        </router-link>
      </nav>
    </div>
  </article>

  <NotFoundView v-else />
</template>

<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import AppIcon from '../components/AppIcon.vue'
import NotFoundView from './NotFoundView.vue'
import { proyectos, buscarProyecto } from '../data/proyectos'

const props = defineProps({
  slug: { type: String, required: true }
})

const proyecto = computed(() => buscarProyecto(props.slug))
const indice = computed(() => proyectos.findIndex((p) => p.slug === props.slug))
const anterior = computed(() => (indice.value > 0 ? proyectos[indice.value - 1] : null))
const siguiente = computed(() =>
  indice.value >= 0 && indice.value < proyectos.length - 1 ? proyectos[indice.value + 1] : null
)

useHead(
  computed(() => ({
    title: proyecto.value ? `${proyecto.value.titulo} | Aintzane Goffard` : 'Proyecto no encontrado | Aintzane Goffard',
    meta: proyecto.value ? [{ name: 'description', content: proyecto.value.resumen }] : [],
    link: proyecto.value
      ? [{ rel: 'canonical', href: `https://aintzanegoffard.com/proyectos/${proyecto.value.slug}` }]
      : []
  }))
)
</script>

<style scoped>
.volver { color: var(--accent); margin-bottom: 32px; }

.proyecto__head {
  max-width: 800px;
  margin-bottom: clamp(32px, 5vw, 56px);
}

.proyecto__titulo {
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  margin-bottom: 16px;
}

.proyecto__resumen {
  font-size: 1.25rem;
  color: var(--muted);
  margin-bottom: 24px;
}

.proyecto__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: clamp(24px, 5vw, 56px);
  align-items: start;
}

.proyecto__main { font-size: 1.1rem; }

.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 240px), 1fr));
  gap: 16px;
  margin-top: 32px;
}

.galeria figure { margin: 0; }

.galeria img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow);
}

.galeria figcaption {
  margin-top: 8px;
  font-size: 0.9rem;
  color: var(--muted);
}

.proyecto__aside {
  position: sticky;
  top: calc(var(--header-h) + 24px);
  display: grid;
  gap: 20px;
}

.aside__title {
  font-size: 1.15rem;
  margin-bottom: 10px;
}

.aside__btn { margin-top: 12px; width: 100%; }

.colab ul { display: flex; flex-wrap: wrap; gap: 6px 14px; }
.colab a { font-size: 0.95rem; }

.siguiente {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: clamp(48px, 7vw, 80px);
  padding-top: 32px;
  border-top: 1px solid var(--border);
}

.siguiente__link {
  display: grid;
  gap: 4px;
  max-width: 48%;
  text-decoration: none;
}

.siguiente__link--next { text-align: right; justify-items: end; }

.siguiente__label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}

.siguiente__titulo {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--primary-strong);
}

.siguiente__link:hover .siguiente__titulo { color: var(--accent); }

@media (max-width: 860px) {
  .proyecto__grid { grid-template-columns: 1fr; }
  .proyecto__aside { position: static; }
}
</style>
