// Directiva v-reveal: el elemento aparece suavemente al entrar en pantalla.
// Uso: <div v-reveal> o <div v-reveal="120"> (retardo en ms)

let observer = null

function getObserver() {
  if (observer || typeof IntersectionObserver === 'undefined') return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  )
  return observer
}

export const vReveal = {
  mounted(el, binding) {
    const obs = getObserver()
    if (!obs) return
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    obs.observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  }
}
