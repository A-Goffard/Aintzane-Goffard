<template>
  <section id="contacto" class="section contacto" aria-labelledby="contacto-title">
    <div class="container">
      <div class="contacto__card" v-reveal>
        <div class="contacto__texto">
          <p class="eyebrow">Contacto</p>
          <h2 id="contacto-title" class="contacto__title">¿Hablamos?</h2>
          <p>
            ¿Tienes una propuesta formativa, un proyecto educativo o una idea digital entre manos?
            Estoy abierta a colaborar en educación, tecnología, divulgación científica e inclusión educativa.
          </p>
        </div>

        <div class="contacto__acciones">
          <a :href="'mailto:' + perfil.email" class="contacto__mail">
            <AppIcon name="mail" :size="24" />
            <span>{{ perfil.email }}</span>
          </a>
          <div class="contacto__botones">
            <a :href="perfil.redes.linkedin" class="btn btn--light" target="_blank" rel="noopener noreferrer">
              <AppIcon name="linkedin" /> LinkedIn
            </a>
            <a :href="perfil.redes.github" class="btn btn--light" target="_blank" rel="noopener noreferrer">
              <AppIcon name="github" /> GitHub
            </a>
            <a :href="perfil.cv" class="btn btn--light" target="_blank" rel="noopener">
              <AppIcon name="doc" /> CV en PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from '../AppIcon.vue'
import { perfil } from '../../data/perfil'
</script>

<style scoped>
.contacto { padding-top: 0; }

.contacto__card {
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: center;
  padding: clamp(32px, 6vw, 64px);
  border-radius: calc(var(--radius) * 1.5);
  background:
    radial-gradient(circle at 100% 0%, rgba(230, 147, 210, 0.35), transparent 50%),
    linear-gradient(135deg, #55346e 0%, #3b2150 100%);
  color: #f1e9f6;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.contacto__card .eyebrow { color: #f3b6e2; }

.contacto__title {
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  margin-bottom: 16px;
}

.contacto__texto p:last-child { font-size: 1.1rem; color: #e2d6ea; }

.contacto__acciones {
  display: grid;
  gap: 20px;
}

.contacto__mail {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  border-radius: var(--radius);
  background: #fff;
  color: #3b2150;
  font-weight: 700;
  font-size: clamp(0.95rem, 2.2vw, 1.15rem);
  text-decoration: none;
  word-break: break-all;
  transition: transform 0.2s ease;
}

.contacto__mail:hover { transform: translateY(-2px); }
.contacto__mail svg { flex: none; color: #a3438e; }

.contacto__botones {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.btn--light {
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

.btn--light:hover { background: rgba(255, 255, 255, 0.16); }

@media (max-width: 860px) {
  .contacto__card { grid-template-columns: 1fr; }
}
</style>
