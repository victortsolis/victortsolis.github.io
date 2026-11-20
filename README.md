# Víctor T. Solís | Mexican Spanish lessons and DELE preparation

Víctor T. Solís teaches Mexican Spanish online at every level, from first conversations to advanced speaking and writing. He also prepares candidates for the DELE B1, B2, C1 and C2 exams. He studied Hispanic language and literature at UNAM and is accredited by the Instituto Cervantes as a DELE examiner for levels C1 and C2.

[Book a trial lesson on Preply](https://preply.com/en/tutor/243847)

[Email Víctor about lessons](mailto:mx.spanish.lessons@gmail.com)

## Español para vivir en México y preparar el DELE

Víctor T. Solís da clases de español mexicano en línea para todos los niveles. Si empiezas desde cero, puedes practicar cómo presentarte y hacer tus primeras preguntas. Si ya hablas español, puedes ensayar una conversación que tendrás esta semana en la Ciudad de México, trabajar un escrito o preparar el DELE con tareas de tu nivel. Víctor guarda contigo las expresiones que te hicieron falta y las retoma en la clase siguiente.

- [Reservar una clase en Preply](https://preply.com/es/profesor/243847)
- [Ver el perfil profesional de Víctor en LinkedIn](https://www.linkedin.com/in/victor-t-solis-spanish-teacher-dele/)
- Correo de contacto: [mx.spanish.lessons@gmail.com](mailto:mx.spanish.lessons@gmail.com)

## Abrir el sitio

Abre [la versión en inglés](index.html) o [la versión en español](es/index.html). Cada idioma tiene la misma landing de una sola página. Al copiar los archivos, conserva la carpeta `es` y deja `site.css` y `assets` en la raíz. En la portada, la carátula «Speak Spanish fluently» activa el reproductor dentro de la página. El retrato cuadrado de Víctor acompaña la explicación de su método.

Para previsualizar el reproductor desde tu computadora, ejecuta este comando dentro de `website-victortsolis` en una terminal con Python 3. Luego abre [la página local](http://127.0.0.1:8000/) con conexión a internet.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

La publicación solo requiere los archivos estáticos de la carpeta.

## Publicar desde la cuenta victortsolis

Sube **el contenido de la carpeta local `website-victortsolis`** al repositorio de la cuenta `victortsolis`. Deja `index.html` en la raíz. Los materiales internos de propuesta y redacción pueden quedarse fuera del repositorio.

La dirección prevista en los metadatos es `https://victortsolis.github.io/`. Para usar esa dirección, crea el repositorio de usuario `victortsolis.github.io`. El nombre de la carpeta en tu computadora puede seguir siendo `website-victortsolis`. Con otro repositorio, subdominio o dominio propio, cambia esa dirección en `index.html`, `es/index.html`, `sitemap.xml`, `robots.txt` y `llms.txt` antes de publicar. Actualiza todas las apariciones, incluidas las direcciones de las imágenes y los identificadores de los datos estructurados. Este paquete está preparado para publicarse en la raíz del dominio, donde los rastreadores buscan `/robots.txt`. Comprueba que conservas la barra final antes de los nombres de archivo. Las imágenes y los estilos usan rutas locales.

**Elección del alojamiento.** GitHub permite guardar el código en un repositorio. Sus condiciones para GitHub Pages restringen el uso del alojamiento gratuito para gestionar negocios en línea y para sitios dedicados principalmente a facilitar transacciones comerciales. Esta página busca captar alumnos, por lo que conviene tener presente ese límite al elegir el alojamiento. [Límites de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

- **Para publicar la landing comercial desde GitHub**, puedes conectar el repositorio a Cloudflare Pages. Elige la rama `main`, usa `exit 0` como comando de compilación y selecciona la raíz (`.`) como directorio de salida. Copia el subdominio real asignado por el proveedor, actualiza el dominio en los archivos indicados arriba y vuelve a desplegar. [Guía para HTML estático](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/)
- **Si confirmas con GitHub que el uso previsto es admisible en Pages**, en el repositorio `victortsolis.github.io` entra en Settings → Pages → Build and deployment. Selecciona Deploy from a branch, rama `main` y carpeta `/(root)`. [Configurar el origen de publicación](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Cómo encuentran las clases

| Recurso | Función |
| --- | --- |
| [Página en inglés](index.html) y [página en español](es/index.html) | El texto, las credenciales y las vías de contacto están en el HTML de cada idioma. Ambas versiones tienen una dirección canónica propia y se enlazan con `hreflang`. La dirección predeterminada abre en inglés. |
| [Sitemap](sitemap.xml) y [robots.txt](robots.txt) | El mapa enumera las dos direcciones públicas. La regla general de rastreo permite leer el sitio e indica dónde encontrar el mapa. |
| Metadatos de cada HTML | Títulos y descripciones por idioma, imagen para compartir, icono SVG y datos JSON-LD que relacionan al profesor con sus servicios y perfiles. |
| [llms.txt](llms.txt) | Resumen de las clases y enlaces de referencia para las herramientas que consulten este archivo. |

Al cambiar la oferta o los datos de contacto, actualiza las dos versiones y el resumen de `llms.txt`. Conserva la distinción entre los **niveles que Víctor prepara** (B1, B2, C1 y C2) y los **niveles de su acreditación como examinador** (C1 y C2).

## Comprobaciones al publicar

1. **Comprueba las direcciones públicas.** Abre `/` y `/es/` en una ventana privada; cada una debe mostrar el idioma correspondiente sin iniciar sesión. Cambia de idioma, reproduce el video y abre los enlaces de reserva y correo. Confirma que `/sitemap.xml` devuelve el XML y `/robots.txt` el texto de reglas. Revisa que el alojamiento sirva estos archivos con estado HTTP 200 y sin cabeceras `X-Robots-Tag: noindex`.
2. **Da de alta la web en Google Search Console.** Verifica una propiedad de prefijo de URL con la dirección HTTPS definitiva o una propiedad de dominio si administras su DNS. En **Sitemaps** envía el mapa. En **Inspección de URLs**, consulta las dos direcciones, usa la prueba de la URL publicada y solicita la indexación de cada una. Cuando Google las procese, comprueba el estado y la URL canónica elegida para cada idioma. [Enviar un sitemap](https://support.google.com/webmasters/answer/7451001) · [Solicitar el rastreo](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
3. **Añade el sitio a Bing Webmaster Tools.** Verifica la dirección definitiva y envía la URL completa del sitemap en **Sitemaps**. Comprueba si Bing pudo leer el mapa y consulta ambas páginas en **URL Inspection**. [Bing Webmaster Tools](https://www.bing.com/webmasters/) · [Cómo descubre Bing los sitemaps](https://blogs.bing.com/webmaster/2025/7/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search/)
4. **Comprueba el acceso de los buscadores con IA.** Si el alojamiento ofrece protección contra bots, revisa que permita las solicitudes legítimas de los rastreadores de búsqueda a las dos páginas. Para ChatGPT Search, el agente relevante es `OAI-SearchBot`. `GPTBot` obedece una política independiente para el posible uso de contenido en el entrenamiento. [Rastreadores de OpenAI](https://developers.openai.com/api/docs/bots) · [Funciones de IA en Google](https://developers.google.com/search/docs/appearance/ai-features)
5. **Enlaza y mide.** Añade el sitio definitivo a los perfiles profesionales que controla Víctor y que admitan enlaces externos. Cuando haya datos, consulta las impresiones y los clics por URL y consulta en Search Console y Bing Webmaster Tools. Así podrás distinguir las búsquedas por nombre de las búsquedas sobre español de México o preparación DELE. [Informe de rendimiento de Search Console](https://support.google.com/webmasters/answer/7576553)

Las comprobaciones locales cubren los archivos que vas a subir. Los informes de los buscadores muestran qué páginas descubrieron e indexaron después de la publicación. Cada motor determina la posición y las posibles citas en respuestas con IA.

## Reseñas de los estudiantes

Después de la presentación del método de Víctor y antes de las preguntas sobre la primera clase aparece un botón independiente. En el idioma elegido, invita a leer las reseñas originales en el [perfil de Víctor en Preply](https://preply.com/es/profesor/243847).

## Imágenes

| Archivo en assets | Uso |
| --- | --- |
| `victor-t-solis-profesor-de-espanol.webp` | Retrato con recorte cuadrado junto a la explicación de cómo son las clases |
| `victor-t-solis-video-clases-de-espanol.webp` | Carátula del reproductor en la portada |
| `victor-t-solis-clases-de-espanol.jpg` | Imagen de vista previa al compartir la página |
| `victor-t-solis.svg` | Icono del sitio para el navegador y los buscadores |
