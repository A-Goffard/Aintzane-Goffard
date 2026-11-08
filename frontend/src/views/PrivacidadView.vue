<template>
  <article class="page">
    <div class="container prose">
      <router-link to="/" class="link-arrow volver">
        <AppIcon name="arrow-left" /> Volver al inicio
      </router-link>

      <p class="eyebrow">Legal</p>
      <h1 class="titulo">Política de privacidad</h1>
      <p class="meta">Última actualización: 7 de noviembre de 2026</p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        <strong>Nombre:</strong> {{ perfil.nombreCompleto }}<br>
        <strong>Actividad:</strong> portfolio personal y servicios profesionales.<br>
        <strong>Correo electrónico:</strong> <a :href="'mailto:' + perfil.email">{{ perfil.email }}</a>
      </p>

      <h2>2. Qué datos recojo y para qué</h2>
      <p>Esta web sigue el principio de minimización: recoge la menor cantidad de datos posible.</p>

      <h3>Cookies y almacenamiento local</h3>
      <p>
        <strong>Esta web no utiliza cookies</strong>, ni servicios de analítica, ni rastreadores publicitarios.
        Las tipografías se sirven desde el propio servidor, sin conexiones a terceros.
      </p>
      <p>
        Si eliges el tema claro u oscuro, esa preferencia se guarda en el almacenamiento local de tu navegador
        (<em>localStorage</em>) para recordarla en tu próxima visita. No se envía a ningún servidor y puedes
        borrarla cuando quieras desde la configuración del navegador.
      </p>

      <h3>Contacto</h3>
      <p>
        No hay formulario de contacto. Los enlaces de correo abren tu propio gestor de email. Si me escribes,
        usaré tu dirección y tu mensaje únicamente para responderte, sobre la base del interés legítimo
        de atender consultas profesionales.
      </p>

      <h3>Datos técnicos (registros del servidor)</h3>
      <p>
        El servidor que aloja la web registra automáticamente cierta información técnica por motivos de seguridad
        y diagnóstico: dirección IP, fecha y hora, navegador y página visitada. Estos registros se eliminan
        periódicamente y no se cruzan con otra información para identificarte.
      </p>

      <h2>3. Alojamiento</h2>
      <p>
        La web está alojada en un servidor privado virtual (VPS) gestionado por mí, cuyos proveedores de
        infraestructura cumplen la normativa europea de protección de datos.
      </p>

      <h2>4. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación y oposición escribiendo a
        <a :href="'mailto:' + perfil.email">{{ perfil.email }}</a>. También puedes presentar una reclamación ante la
        Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>).
      </p>

      <h2>5. Enlaces externos</h2>
      <p>
        Esta web enlaza a plataformas de terceros (LinkedIn, GitHub, ResearchGate, YouTube…). Al visitarlas,
        se aplica su propia política de privacidad.
      </p>
    </div>
  </article>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import AppIcon from '../components/AppIcon.vue'
import { perfil } from '../data/perfil'

useHead({
  title: 'Política de privacidad | Aintzane Goffard',
  link: [{ rel: 'canonical', href: 'https://aintzanegoffard.com/privacidad' }]
})
</script>

<style scoped>
.volver { color: var(--accent); margin-bottom: 32px; }
.titulo { font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 8px; }
.meta { color: var(--muted); }
</style>
