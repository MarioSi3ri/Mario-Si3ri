# 🌐 Portafolio web personal — Mario Sierra Neri

<p align="center">
  <strong>Sitio web profesional para presentar mis habilidades de desarrollo, proyectos personales, certificaciones y medios de contacto.</strong>
</p>

<p align="center">
  <a href="https://mariosi3ri.github.io/Mario-Si3ri/">🚀 Ver portafolio en línea</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/Licencia-MIT-1f883d?style=for-the-badge" alt="Licencia MIT" />
</p>

---

## 📖 ¿De qué trata?

Este repositorio contiene mi **portafolio web personal**, creado para presentar mi perfil como **Ingeniero en Sistemas Computacionales**, mis habilidades de desarrollo y una selección de proyectos académicos y personales.

El sitio integra en una sola experiencia las secciones de presentación, información personal, proyectos, certificaciones y contacto. Su diseño utiliza navegación fija, menú desplegable, animaciones CSS, tarjetas visuales, carrusel de certificados, cambio de tema y enlaces a repositorios y demostraciones externas.

Es una aplicación web estática: no utiliza backend, base de datos ni proceso de compilación. Puede abrirse directamente en un navegador y es publicado mediante GitHub Pages.

## ✨ Características principales

- 👤 Presentación personal y perfil académico.
- 📱 Diseño adaptable para móviles, tabletas y escritorio.
- 🧭 Navegación fija hacia las secciones principales.
- ☰ Menú desplegable con enlaces externos y accesos rápidos.
- 📂 Galería de proyectos con imágenes, descripciones y enlaces.
- 🛠️ Tecnologías asociadas a cada proyecto.
- 🏅 Carrusel interactivo de cursos y certificaciones.
- 📄 CV descargable en formato PDF.
- 📬 Enlaces de contacto mediante correo, GitHub y LinkedIn.
- 🌗 Tema claro y oscuro persistente mediante `localStorage`.
- 🎨 Gradientes, transiciones, animaciones y efectos al pasar el cursor.
- 🔗 Enlaces a proyectos publicados en GitHub Pages, Vercel y otros repositorios.

## 🧭 Secciones del sitio

### Inicio

Presenta el nombre **Mario Sierra Neri**, la carrera de Ingeniería en Sistemas Computacionales, una imagen personal y un mensaje de bienvenida.

### Acerca de mí

Resume mi formación, intereses y experiencia en desarrollo frontend y backend. También incluye enlaces al CV, GitHub y LinkedIn.

### Proyectos

La galería presenta proyectos como:

- **Número Secreto con Star Wars** — juego web interactivo con HTML, CSS y JavaScript.
- **Formulario** — aplicación web con PHP, HTML, CSS, JavaScript y Vercel.
- **Carrera de Hilos** — aplicación de escritorio desarrollada con Java Swing.
- **Calculadora Swing** — calculadora gráfica creada con Java Swing.
- **Proyecto de Gestión de Productos** — proyecto Java con Spring y persistencia.
- **Conversor de Monedas** — aplicación Java con Gson.
- **Sistema Bancario** — proyecto para practicar programación orientada a objetos.
- **Librería con ONE/Alura** — aplicación Java con PostgreSQL.

Las imágenes de los proyectos incluyen efectos visuales y modifican temporalmente la información tecnológica al pasar el cursor.

### Certificados

El carrusel incluye enlaces verificables a cursos y certificaciones relacionados con informática, Java Full Stack, Oracle Next Education, Google Cloud, análisis de datos, soporte TI, ciberseguridad e inteligencia artificial.

### Contacto

Incluye enlaces directos al correo electrónico, CV, GitHub y LinkedIn, además de una opción para regresar al inicio.

## 🧰 Tecnologías utilizadas

| Tecnología o herramienta | Uso |
| --- | --- |
| **HTML5** | Estructura del portafolio, navegación, secciones, tablas, imágenes y enlaces. |
| **CSS3** | Diseño responsive, temas, animaciones, gradientes, sombras y transiciones. |
| **JavaScript vanilla** | Menú, cambio de tema, carrusel, descripciones y navegación dinámica. |
| **GitHub Pages** | Publicación del sitio estático. |
| **Git y GitHub** | Control de versiones y alojamiento del código. |
| **Font Awesome** | Iconos de navegación, proyectos y redes sociales. |
| **Material Symbols** | Iconos para el tema y elementos de interfaz. |

No se utiliza `package.json`, framework frontend ni un proceso de compilación. Los estilos y scripts se cargan directamente desde el repositorio.

## 📁 Estructura del proyecto

```text
Mario-Si3ri/
├── index.html                         # Página principal del portafolio
├── public/
│   ├── assets/                        # Imágenes, iconos, capturas y certificados
│   │   ├── Myphoto.jpg                # Fotografía personal
│   │   ├── sw-game_a.png              # Captura de Número Secreto
│   │   ├── form.png                   # Captura del Formulario
│   │   ├── carrera.png                # Carrera de Hilos
│   │   ├── calc.png                   # Calculadora Swing
│   │   ├── projectjava.png            # Proyecto Java/Spring
│   │   ├── conversor.png              # Conversor de Monedas
│   │   ├── bancario.png               # Sistema Bancario
│   │   ├── libreria.png               # Proyecto de Librería
│   │   └── ...                         # Fondos, iconos y certificados
│   └── documents/cv/
│       └── CV_Mario_Sierra_Neri_EN.pdf # CV descargable
├── src/
│   ├── css/
│   │   └── styleinicio.css             # Estilos globales y responsive
│   └── js/
│       └── scriptinicio.js              # Interactividad del portafolio
├── .hintrc                              # Configuración de Webhint
├── LICENSE                              # Licencia MIT
└── README.md                            # Documentación del proyecto
```

## 🔄 Funcionamiento

`index.html` define la estructura del sitio y enlaza `src/css/styleinicio.css` con `src/js/scriptinicio.js`.

El archivo JavaScript se encarga de:

- Leer y aplicar el tema guardado en `localStorage`.
- Usar la preferencia visual del sistema cuando no existe una elección manual.
- Abrir y cerrar el menú desplegable.
- Cerrar el menú al elegir un enlace o hacer clic fuera de él.
- Marcar la sección activa durante el desplazamiento.
- Cambiar las descripciones tecnológicas de los proyectos al pasar el cursor.
- Desplazar el carrusel de certificados mediante `scrollCarousel(direction)`.

La hoja de estilos controla el fondo degradado animado, las tarjetas, la navegación fija, el carrusel, las imágenes, los efectos hover, el tema oscuro y las reglas responsive.

## 🚀 Instalación

### Requisitos previos

- Navegador web moderno.
- Git, si deseas clonar el repositorio.
- Editor de código, opcional, para personalizar el portafolio.

No es necesario instalar Node.js, npm, PHP, una base de datos ni un servidor backend.

### Clonar el repositorio

```bash
git clone https://github.com/MarioSi3ri/MarioSi3ri.git
cd MarioSi3ri
```

### Abrir el sitio

Puedes abrir `index.html` directamente en el navegador.

**Windows**

```bash
start index.html
```

**macOS**

```bash
open index.html
```

**Linux**

```bash
xdg-open index.html
```

### Servidor local opcional

Para simular un entorno web local puedes ejecutar:

```bash
python3 -m http.server 8000
```

Después visita `http://localhost:8000`. También puedes usar la extensión **Live Server** de Visual Studio Code.

## 🌐 Publicación en GitHub Pages

La versión publicada está disponible en:

**[https://mariosi3ri.github.io/Mario-Si3ri/](https://mariosi3ri.github.io/Mario-Si3ri/)**

Para publicar modificaciones:

```bash
git add .
git commit -m "actualizar portafolio"
git push origin main
```

Después verifica en GitHub, dentro de `Settings > Pages`, que la fuente de publicación corresponda a la rama `main`.

## 🖥️ Uso y personalización

### Actualizar la información personal

Modifica en `index.html` el nombre, la carrera, el texto de presentación, los enlaces sociales, el correo y la información del pie de página.

### Agregar un proyecto

1. Añade una imagen en `public/assets`.
2. Incorpora el proyecto en la sección `#proyectos` de `index.html`.
3. Enlaza la imagen al repositorio o demo correspondiente.
4. Agrega sus identificadores al arreglo `imagenes` de `src/js/scriptinicio.js`.
5. Define estilos específicos en `src/css/styleinicio.css` si es necesario.

### Agregar un certificado

1. Guarda la imagen en `public/assets`.
2. Añade un enlace verificable dentro de `#carouselTrack`.
3. Incluye un atributo `alt` descriptivo.
4. Comprueba el resultado en escritorio y dispositivos móviles.

### Actualizar el CV

Reemplaza el archivo `public/documents/cv/CV_Mario_Sierra_Neri_EN.pdf` y conserva la ruta o actualiza sus referencias en `index.html`.

## ✅ Validación manual

Antes de publicar cambios, comprueba:

1. El menú fijo y el menú desplegable.
2. Los enlaces de Inicio, Acerca, Proyectos, Certificados y Contacto.
3. El cambio entre tema claro y oscuro.
4. La persistencia del tema después de recargar.
5. Las descripciones interactivas de los proyectos.
6. Los botones del carrusel de certificados.
7. La apertura del CV y los enlaces externos.
8. El diseño en escritorio, tablet y móvil.
9. La carga correcta de imágenes, scripts, estilos y documentos.

## 🔮 Mejoras futuras

- Migrar la galería desde tablas HTML a tarjetas semánticas con CSS Grid o Flexbox.
- Separar proyectos y certificados en una estructura de datos reutilizable.
- Añadir filtros por tecnología o categoría.
- Mejorar la navegación por teclado y los estados de foco.
- Incorporar soporte multilingüe español/inglés.
- Optimizar imágenes con WebP o AVIF.
- Implementar carga diferida y validación automática de enlaces.
- Añadir un formulario de contacto conectado a un servicio seguro.

## 📄 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Consulta [LICENSE](LICENSE) para conocer las condiciones completas de uso, modificación y distribución.

## 👤 Autor

**Mario Sierra Neri**

- GitHub: [@MarioSi3ri](https://github.com/MarioSi3ri)
- LinkedIn: [Mario Sierra Neri](https://mx.linkedin.com/in/mario-sn)
- CV: [Descargar CV](public/documents/cv/CV_Mario_Sierra_Neri_EN.pdf)

---

<p align="center">
  Hecho con HTML, CSS, JavaScript, café y creatividad. ✨
</p>
