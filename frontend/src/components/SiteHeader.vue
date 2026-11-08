<template>
  <header class="header" :class="{ 'header--scrolled': scrolled || menuAbierto }">
    <div class="container header__inner">
      <router-link to="/" class="brand" aria-label="Aintzane Goffard, inicio" @click="cerrar">
        <span class="brand__mark" aria-hidden="true">AG</span>
        <span class="brand__name">Aintzane Goffard</span>
      </router-link>

      <nav id="menu-principal" class="nav" :class="{ 'nav--open': menuAbierto }" aria-label="Navegación principal">
        <router-link
          v-for="item in enlaces"
          :key="item.id"
          :to="{ path: '/', hash: '#' + item.id }"
          class="nav__link"
          :class="{ 'is-active': activa === item.id }"
          :aria-current="activa === item.id ? 'true' : null"
          @click="cerrar"
        >{{ item.texto }}</router-link>
      </nav>

      <div class="header__actions">
        <button
          type="button"
          class="icon-btn"
          :aria-label="tema === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
          :title="tema === 'dark' ? 'Tema claro' : 'Tema oscuro'"
          @click="alternar"
        >
          <AppIcon :name="tema === 'dark' ? 'sun' : 'moon'" />
        </button>
        <button
          type="button"
          class="icon-btn menu-btn"
          :aria-expanded="menuAbierto ? 'true' : 'false'"
          aria-controls="menu-principal"
          :aria-label="menuAbierto ? 'Cerrar menú' : 'Abrir menú'"
          @click="menuAbierto = !menuAbierto"
        >
          <AppIcon :name="menuAbierto ? 'close' : 'menu'" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from './AppIcon.vue'
import { useTema } from '../composables/useTema'

const enlaces = [
  { id: 'sobre-mi', texto: 'Sobre mí' },
  { id: 'trayectoria', texto: 'Trayectoria' },
  { id: 'pedagogia', texto: 'Pedagogía' },
  { id: 'proyectos', texto: 'Proyectos' },
  { id: 'formacion', texto: 'Formación' },
  { id: 'ciencia', texto: 'Ciencia' },
  { id: 'contacto', texto: 'Contacto' }
]

const { tema, alternar } = useTema()
const route = useRoute()
const scrolled = ref(false)
const menuAbierto = ref(false)
const activa = ref(null)
let spy = null

function cerrar() {
  menuAbierto.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 12
}

function onKey(e) {
  if (e.key === 'Escape') cerrar()
}

// Resalta en el menú la sección que se está leyendo
function vigilarSecciones() {
  if (spy) spy.disconnect()
  activa.value = null
  if (route.name !== 'inicio' || typeof IntersectionObserver === 'undefined') return
  spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) activa.value = e.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  enlaces.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) spy.observe(el)
  })
}

watch(() => route.name, () => nextTick(vigilarSecciones))

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
  nextTick(vigilarSecciones)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  if (spy) spy.disconnect()
})
</script>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  height: var(--header-h);
  background: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
}

.header--scrolled {
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: saturate(160%) blur(12px);
  -webkit-backdrop-filter: saturate(160%) blur(12px);
  box-shadow: 0 1px 0 var(--border);
}

.header__inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--primary-strong);
  flex: none;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--primary);
  color: var(--on-primary);
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
}

.brand__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.2rem;
}

.nav {
  display: flex;
  gap: 4px;
  margin-left: auto;
}

.nav__link {
  position: relative;
  padding: 8px 12px;
  border-radius: 999px;
  color: var(--muted);
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav__link:hover { color: var(--primary-strong); background: var(--primary-soft); }
.nav__link.is-active { color: var(--primary-strong); }
.nav__link.is-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 2px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  transform: translateX(-50%);
}

.header__actions {
  display: flex;
  gap: 6px;
  flex: none;
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--primary-strong);
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.icon-btn:hover { background: var(--primary-soft); transform: rotate(-8deg); }

.menu-btn { display: none; }

@media (max-width: 1000px) {
  .brand__name { font-size: 1.05rem; }
  .header__actions { margin-left: auto; }
  .menu-btn { display: grid; }

  .nav {
    position: fixed;
    top: var(--header-h);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 2px;
    margin: 0;
    padding: 12px var(--gutter) 24px;
    background: var(--bg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid var(--border);
    transform: translateY(-8px);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  }

  .nav--open {
    transform: none;
    opacity: 1;
    visibility: visible;
  }

  .nav__link {
    padding: 14px 16px;
    border-radius: var(--radius-sm);
    font-size: 1.05rem;
  }

  .nav__link.is-active::after { display: none; }
  .nav__link.is-active { background: var(--primary-soft); }
}

@media (max-width: 380px) {
  .brand__name { display: none; }
}
</style>
