# Aintzane Goffard · Portfolio

Portfolio personal de Aintzane Goffard: docente, diseñadora pedagógica STEAM, geóloga y desarrolladora web.
Mismo stack que la web de Geobizi: **Vue 3 + Vue CLI + vue-router + @vueuse/head**, servido con **Nginx en Docker** en el VPS.

## Estructura

```
frontend/
  public/                 # index.html (SEO), imágenes, CV en PDF, favicon, sitemap
  src/
    data/                 # ← TODO EL CONTENIDO SE EDITA AQUÍ
      perfil.js           #   nombre, lema, redes, sobre mí, pilares
      trayectoria.js      #   experiencia profesional
      pedagogia.js        #   líneas de trabajo educativo
      proyectos.js        #   proyectos (cada uno genera /proyectos/<slug>)
      formacion.js        #   títulos, certificaciones, especializaciones
      publicaciones.js    #   artículos científicos
      competencias.js     #   competencias e idiomas
    components/secciones/ # una sección de la portada por archivo
    views/                # portada, detalle de proyecto, privacidad, 404
    assets/styles/main.css# paleta (modo claro/oscuro), tipografía y estilos comunes
  aintzane.conf           # Nginx del contenedor (SPA + redirecciones de la web antigua)
  Dockerfile.prod
docker-compose.yml        # producción: 127.0.0.1:8081
docker-compose.dev.yml    # desarrollo con recarga en caliente
```

### Añadir un proyecto

1. Copia la imagen (mejor `.avif`) en `frontend/public/imagenes/proyectos/`.
2. Añade un objeto en `frontend/src/data/proyectos.js` con un `slug` nuevo.
3. Añade la URL en `frontend/public/sitemap.xml`.

## Desarrollo

```bash
cd frontend
npm install
npm run serve        # http://localhost:8080
```

o con Docker: `docker compose -f docker-compose.dev.yml up`

## Despliegue

VPS de Piensa (Ubuntu 22.04), compartido con Geobizi (puertos 8080 y 5000, que no se tocan).

Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`, que entra por SSH al VPS y:

1. actualiza el código en `/root/aintzanegoffard`,
2. construye la imagen (si falla, la web en marcha no se toca),
3. sustituye el contenedor `aintzane_frontend` en `127.0.0.1:8081` (`restart: always`),
4. comprueba que la web responde,
5. borra imágenes viejas y la caché de compilación de más de un día.

Secrets en GitHub: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY` y, opcional, `VPS_FINGERPRINT`.

### Preparar el VPS (solo una vez)

```bash
# Repositorio público
git clone https://github.com/A-Goffard/Aintzane-Goffard.git /root/aintzanegoffard

# Repositorio privado: clave de solo lectura (deploy key) para este repo
ssh-keygen -t ed25519 -C "vps-aintzanegoffard" -f /root/.ssh/github_aintzanegoffard -N ""
cat /root/.ssh/github_aintzanegoffard.pub   # GitHub > Settings > Deploy keys > Add (sin permiso de escritura)
cat >> /root/.ssh/config <<'EOF'
Host github-aintzanegoffard
    HostName github.com
    User git
    IdentityFile /root/.ssh/github_aintzanegoffard
    IdentitiesOnly yes
EOF
git clone git@github-aintzanegoffard:A-Goffard/Aintzane-Goffard.git /root/aintzanegoffard
# Si ya estaba clonado por https:
# git -C /root/aintzanegoffard remote set-url origin git@github-aintzanegoffard:A-Goffard/Aintzane-Goffard.git
```

### Nginx del VPS

El Nginx del sistema (el que tiene el certificado SSL) reenvía el dominio al contenedor:

```nginx
server {
    server_name aintzanegoffard.com www.aintzanegoffard.com;

    location / {
        proxy_pass http://127.0.0.1:8081;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    # listen 443 ssl ... (lo añade certbot: sudo certbot --nginx -d aintzanegoffard.com -d www.aintzanegoffard.com)
}

# Dominio antiguo -> nuevo (conserva el posicionamiento en Google)
server {
    server_name aintzane-goffard.com www.aintzane-goffard.com;
    return 301 https://aintzanegoffard.com$request_uri;
    # listen 443 ssl ... (certbot: sudo certbot --nginx -d aintzane-goffard.com -d www.aintzane-goffard.com)
}
```

Las rutas de la web antigua (`/proyectos/proyecto5.html`, etc.) llegan redirigidas al dominio nuevo y allí
el Nginx del contenedor las vuelve a redirigir a su página nueva.

## Privacidad

Sin cookies, sin analítica y sin llamadas a terceros: las tipografías (Lato y Nunito) se sirven desde el propio servidor.
Solo se guarda en `localStorage` la preferencia de tema claro/oscuro.

## Licencia

El **código** se distribuye bajo licencia [MIT](https://opensource.org/licenses/MIT).

**No** están cubiertos por la licencia MIT y no pueden usarse sin autorización expresa: los textos, fotografías,
logotipos, el CV, los materiales pedagógicos y los datos personales incluidos en el repositorio.
