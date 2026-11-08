<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__glow" aria-hidden="true"></div>
    <div class="container hero__grid">
      <div class="hero__text">
        <p class="eyebrow">
          <AppIcon name="pin" :size="16" />
          {{ perfil.ubicacion }}
        </p>
        <h1 id="hero-title" class="hero__title">
          Aintzane<br><span>Goffard</span>
        </h1>
        <ul class="hero__roles" aria-label="Perfiles profesionales">
          <li v-for="rol in perfil.roles" :key="rol">{{ rol }}</li>
        </ul>
        <p class="hero__lema">{{ perfil.lema }}</p>

        <div class="hero__cta">
          <router-link :to="{ path: '/', hash: '#proyectos' }" class="btn btn--primary">
            Ver proyectos
            <AppIcon name="arrow-right" />
          </router-link>
          <a :href="perfil.cv" class="btn btn--ghost" target="_blank" rel="noopener">
            <AppIcon name="download" />
            Descargar CV
          </a>
        </div>
      </div>

      <div class="hero__media">
        <div class="hero__frame">
          <picture>
            <source srcset="/imagenes/aintzane.avif" type="image/avif">
            <img
              src="/imagenes/aintzane.jpg"
              alt="Aintzane Goffard sonriendo, apoyada bajo un árbol en un parque"
              width="480"
              height="600"
              fetchpriority="high"
            >
          </picture>
        </div>
        <span class="hero__badge hero__badge--a">DUA · Neuroeducación</span>
        <span class="hero__badge hero__badge--b">STEAM · Ciencia</span>
        <span class="hero__badge hero__badge--c">Vue · Python</span>
      </div>
    </div>

    <div class="container">
      <dl class="hero__datos">
        <div v-for="d in perfil.datos" :key="d.texto" class="hero__dato">
          <dt>{{ d.valor }}</dt>
          <dd>{{ d.texto }}</dd>
        </div>
      </dl>
    </div>

    <EstratosFondo class="hero__estratos" />
  </section>
</template>

<script setup>
import AppIcon from '../AppIcon.vue'
import EstratosFondo from '../EstratosFondo.vue'
import { perfil } from '../../data/perfil'
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: calc(var(--header-h) + clamp(24px, 6vw, 72px));
  background: linear-gradient(180deg, var(--bg) 0%, var(--primary-soft) 100%);
  overflow: hidden;
}

.hero__glow {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60vw;
  max-width: 760px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 65%);
  pointer-events: none;
}

.hero__grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: clamp(32px, 6vw, 80px);
}

.hero__title {
  font-size: clamp(3rem, 8vw, 5.5rem);
  line-height: 0.98;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.hero__title {
  font-weight: 800;
}

.hero__title span {
  color: var(--primary);
}

.hero__roles {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 0;
  margin-bottom: 20px;
  font-weight: 700;
  color: var(--primary-strong);
  font-size: clamp(1rem, 1.8vw, 1.15rem);
}

.hero__roles li:not(:last-child)::after {
  content: '·';
  margin: 0 10px;
  color: var(--accent);
}

.hero__lema {
  max-width: 34em;
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  color: var(--muted);
  margin-bottom: 32px;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* Foto con esquinas redondeadas */
.hero__media {
  position: relative;
  justify-self: center;
  width: min(100%, 400px);
}

.hero__frame {
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  box-shadow: var(--shadow-lg);
  border: 6px solid var(--surface);
}

.hero__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__media::before {
  content: '';
  position: absolute;
  inset: 18px -18px -18px 18px;
  border-radius: 44px;
  border: 2px dashed var(--primary);
  opacity: 0.35;
  z-index: -1;
}

.hero__badge {
  position: absolute;
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--surface);
  color: var(--primary-strong);
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: var(--shadow);
  white-space: nowrap;
  animation: flotar 6s ease-in-out infinite;
}

.hero__badge--a { top: 14%; left: -14%; }
.hero__badge--b { top: 52%; right: -12%; animation-delay: -2s; color: var(--leaf); }
.hero__badge--c { bottom: 8%; left: -6%; animation-delay: -4s; color: var(--sky); }

@keyframes flotar {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.hero__datos {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: clamp(40px, 6vw, 72px) 0 0;
}

.hero__dato {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border-radius: var(--radius);
  background: color-mix(in srgb, var(--surface) 75%, transparent);
  border: 1px solid var(--border);
}

.hero__dato dt {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
}

.hero__dato dd {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.35;
}

.hero__estratos { margin-top: -10px; }

@media (max-width: 860px) {
  .hero__grid { grid-template-columns: 1fr; }
  .hero__media { order: -1; width: min(72%, 300px); }
  .hero__text { text-align: left; }
  .hero__badge--a { left: -18%; }
  .hero__badge--b { right: -16%; }
  .hero__datos { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .hero__badge { font-size: 0.75rem; padding: 6px 10px; }
  .hero__badge--a { left: -10%; }
  .hero__badge--b { right: -10%; }
  .hero__badge--c { left: -2%; }
}
</style>
