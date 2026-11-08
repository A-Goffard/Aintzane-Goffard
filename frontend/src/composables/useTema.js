import { ref } from 'vue'

// Tema claro/oscuro. Por defecto sigue al sistema; si la persona elige, se recuerda.
const prefiereOscuro = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches

function leerGuardado() {
  try {
    return localStorage.getItem('tema')
  } catch (e) {
    return null
  }
}

const tema = ref(leerGuardado() || (prefiereOscuro() ? 'dark' : 'light'))

export function useTema() {
  function alternar() {
    tema.value = tema.value === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', tema.value)
    try {
      localStorage.setItem('tema', tema.value)
    } catch (e) {
      /* navegación privada: no pasa nada */
    }
  }
  return { tema, alternar }
}
