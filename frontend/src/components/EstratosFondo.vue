<template>
  <!-- Capas onduladas inspiradas en el flysch: decoración, no aporta contenido -->
  <svg
    class="estratos"
    viewBox="0 0 1440 220"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <path class="e1" d="M0 120 C 180 70 360 70 540 110 S 900 160 1080 120 S 1350 70 1440 90 V220 H0 Z" />
    <path class="e2" d="M0 150 C 200 110 380 115 560 145 S 920 185 1100 150 S 1360 110 1440 125 V220 H0 Z" />
    <path class="e3" d="M0 180 C 220 150 400 155 600 178 S 940 205 1120 182 S 1370 155 1440 165 V220 H0 Z" />
  </svg>
</template>

<style scoped>
.estratos {
  display: block;
  width: 100%;
  height: clamp(60px, 10vw, 140px);
}
.e1 { fill: var(--primary-soft); opacity: 0.6; }
.e2 { fill: var(--primary-soft); }
.e3 { fill: var(--bg); }
</style>
