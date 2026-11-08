<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <p class="footer__name">Aintzane Goffard</p>
        <p class="footer__tag">Ciencia, educación inclusiva y tecnología.</p>
      </div>

      <ul class="footer__social" aria-label="Redes y contacto">
        <li>
          <a :href="perfil.redes.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (se abre en otra pestaña)">
            <AppIcon name="linkedin" :size="22" />
          </a>
        </li>
        <li>
          <a :href="perfil.redes.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub (se abre en otra pestaña)">
            <AppIcon name="github" :size="22" />
          </a>
        </li>
        <li>
          <a :href="'mailto:' + perfil.email" aria-label="Enviar un correo electrónico">
            <AppIcon name="mail" :size="22" />
          </a>
        </li>
      </ul>

      <div class="footer__legal">
        <small>© {{ anio }} Aintzane Goffard · <router-link to="/privacidad">Privacidad</router-link> · Sin cookies</small>
        <small class="footer__by">
          Hecho por
          <a href="https://www.geobizi.com" target="_blank" rel="noopener noreferrer">
            Geobizi&lt;TIK&gt;
            <img src="/imagenes/iconos/Hojitas.png" alt="" width="20" height="20" loading="lazy">
          </a>
        </small>
      </div>
    </div>

    <button
      v-show="visible"
      type="button"
      class="to-top"
      aria-label="Volver arriba"
      title="Volver arriba"
      @click="subir"
    >
      <AppIcon name="arrow-up" />
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppIcon from './AppIcon.vue'
import { perfil } from '../data/perfil'

const anio = new Date().getFullYear()
const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 700
}

function subir() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.footer {
  background: var(--primary-strong);
  color: #e9def1;
  padding-block: 48px 32px;
}

:root[data-theme="dark"] .footer { background: #120e15; }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .footer { background: #120e15; }
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px 32px;
  align-items: center;
}

.footer__name {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.footer__tag { margin: 4px 0 0; color: #c9b8d6; }

.footer__social {
  display: flex;
  gap: 10px;
}

.footer__social a {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.footer__social a:hover { background: rgba(255, 255, 255, 0.12); transform: translateY(-2px); }

.footer__legal {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  color: #c9b8d6;
}

.footer__legal a { color: #fff; }

.footer__by a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  font-weight: 700;
}

.to-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 40;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: var(--primary);
  color: var(--on-primary);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.to-top:hover { transform: translateY(-3px); }

@media (max-width: 640px) {
  .footer__inner { grid-template-columns: 1fr; }
  .footer__legal { flex-direction: column; }
}
</style>
