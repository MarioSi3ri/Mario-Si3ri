// CAMBIA EL DISEÑO/TEMA DE LA PÁGINA (V2).
document.addEventListener("DOMContentLoaded", function(){
    const toggleButton = document.getElementById("toggleTheme");
    const body= document.body;

    function toggleTheme(){
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme){
            body.classList.toggle("dark-mode", savedTheme === "dark");
            toggleButton.innerHTML = savedTheme === "dark" ? '<span class="material-symbols-outlined">brightness_7</span>' : '<span class="material-symbols-outlined">nights_stay</span>';
        } else {
            const sistemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            body.classList.toggle("dark-mode", sistemDark);
            toggleButton.innerHTML = sistemDark ? '<span class="material-symbols-outlined">brightness_7</span>' : '<span class="material-symbols-outlined">nights_stay</span>';
        }
    }

    function applySavedTheme(){
        const isDarkMode = body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        toggleButton.innerHTML = isDarkMode ? '<span class="material-symbols-outlined">brightness_7</span>' : '<span class="material-symbols-outlined">nights_stay</span>';
    }
    toggleTheme();
    toggleButton.addEventListener("click", applySavedTheme);
    window.matchMedia("(prefers-color-scheme : dark)").addEventListener("change", toggleTheme);
});

/*/FUNCIÓN PARA EL BOTÓN HOUSE/INICIO.
function inicio() {
  window.scrollTo({top:0, behavior: 'smooth'});
}*/

// VERIFICA Y ACTIVA LAS FUNCIONALIDADES DEL MENÚ.
function Menu() {
    const menuIcon = document.getElementById('menuIcon');
    const menuActions = document.getElementById('menuAction');
  
    menuIcon.addEventListener('click', () => { // Aplica la visibilidad al hacer clic en el ícono.
      menuActions.classList.toggle('open');
    });
  
    document.addEventListener('click', (event) => { // Cierra el menú al hacer clic fuera del mismo.
      if (!menuActions.contains(event.target) && event.target !== menuIcon) {
        menuActions.classList.remove('open');
      }
    });
  }
  
// VALIDACIÓN AL CARGAR LA PÁGINA (DOM) PARA ASEGURAR QUE EL BOTÓN TENGAN EL ESTADO CORRECTO Y ACTIVO.
document.addEventListener("DOMContentLoaded", Menu);

// CERRAR EL MENU DESPLEGABLE AL HACER CLIC FUERA DE ÉL O EN ALGÚN ENLACE.
document.addEventListener('DOMContentLoaded', () => {
  const menuDesplegable = document.getElementById('menuAction');

  menuDesplegable.querySelectorAll('a').forEach(link => { // Cerrar el menú al hacer clic en cualquier enlace dentro del menú.
    link.addEventListener('click', () => {
      menuDesplegable.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => { // Cerrar el menú al hacer clic fuera de él.
    if (!menuDesplegable.contains(e.target) && !menuIcon.contains(e.target)) {
      menuDesplegable.classList.remove('open');
    }
  });
});

// CAMBIO DEL TEXTO AL SELECCIONAR LA IMAGEN.
document.addEventListener("DOMContentLoaded", function(){
  const imagenes = [
    {id: 'imgSW', textoId: 'descripcion', texto: "<span class='resaltado-ao'><i class='fa-brands fa-html5'></i> HTML <i class='fa-brands fa-css'></i> CSS <i class='fa-brands fa-js'></i> JS</span>" },
    {id: 'imgForm', textoId: 'descripcion2', texto: "<span class='resaltado-ac'><i class='fa-brands fa-html5'></i> HTML <i class='fa-brands fa-css'></i> CSS <i class='fa-brands fa-js'></i> JS <i class='fa-brands fa-php'></i> PHP <i class='fa-solid fa-database'></i> MySQL</span>" },
    {id: 'imgHilos', textoId: 'descripcion3', texto: "<span class='resaltado-ao'><i class='fa-brands fa-java fa-lg'></i> Java <i class='fa-solid fa-cubes-stacked'></i> Java Swing</span>" },
    {id: 'imgCalc', textoId: 'descripcion4', texto: "<span class='resaltado-ac'><i class='fa-brands fa-java fa-lg'></i> Java <i class='fa-solid fa-cubes-stacked'></i> Java Swing</span>" },
    {id: 'imgJP', textoId: 'descripcion5', texto: "<span class='resaltado-ao'><i class='fa-brands fa-java fa-lg'></i> Java <i class='fa-solid fa-leaf'></i> Spring <i class='fa-solid fa-database'></i> MySQL</span>" },
    {id: 'imgConver', textoId: 'descripcion6', texto: "<span class='resaltado-ac'><i class='fa-brands fa-java fa-lg'></i> Java <i class='fa-brands fa-google'></i> Gson" },
    {id: 'imgSB', textoId: 'descripcion7', texto: "<span class='resaltado-ao'><i class='fa-brands fa-java fa-lg'></i> Java</span>" },
    {id: 'imgLibreria', textoId: 'descripcion8', texto: "<span class='resaltado-ac'><i class='fa-brands fa-java fa-lg'></i> Java <i class='fa-solid fa-database'></i> PostgreSQL</span>" },
  ];

    imagenes.forEach((imagen) => {
      const imgElement = document.getElementById(imagen.id);
      const descripcion = document.getElementById(imagen.textoId);
      const textoDefecto = descripcion.innerHTML;

      imgElement.addEventListener('mouseover', () => { // Agregar eventos para detectar el "mouseover" y "mouseout".
        descripcion.classList.add('desliz-y');
        setTimeout(() => {
        descripcion.innerHTML = imagen.texto;
        descripcion.classList.remove('desliz-y');
      }, 500);
      });

      imgElement.addEventListener('mouseout', () => {
        descripcion.classList.add('desliz-y');
        setTimeout(() => {
        descripcion.innerHTML = textoDefecto;
        descripcion.classList.remove('desliz-y');
      }, 500);
    });
    /* imagenes.forEach((imagen) => {
      const imgElement = document.getElementById(imagen.id);
      const descripcion = document.getElementById(imagen.textoId);
      const textoDefecto = descripcion.innerHTML;

      imgElement.addEventListener('mouseover', () => { // Agregar eventos para detectar el "mouseover" y "mouseout".
        descripcion.innerHTML = imagen.texto;
      });

      imgElement.addEventListener('mouseout', () => {
        descripcion.innerHTML = textoDefecto;
      });*/
    });
});

// FUNCIÓN QUE GENERA MOVIMIENTO Y CENTRAR IMÁGENES EN EL CARRUSEL.
function scrollCarousel(direction) {
  const track = document.getElementById('carouselTrack');
  const items = track.querySelectorAll('.certificados-section-a');

  const trackCenter = track.scrollLeft + track.clientWidth / 2; // Encuentra el centro del carrusel.

  let closestIndex = 0; // Encuentra el índice del elemento (imagen) más cercano al centro.
  let minDistance = Infinity;

  items.forEach((item, index) => {
  const itemCenter = item.offsetLeft + item.offsetWidth / 2;
  const distance = Math.abs(trackCenter - itemCenter);
     if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    let newIndex = closestIndex + direction; // Calcula el nuevo índice basado en la dirección (por los botones).
    newIndex = Math.max(0, Math.min(items.length - 1, newIndex));

    const target = items[newIndex]; // Centra el nuevo elemento (imagen).
    const scrollTo = target.offsetLeft - (track.clientWidth / 2) + (target.offsetWidth / 2);

    track.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
  });
}

// FUNCIÓN QUE CAMBIA EL COLOR DEL TEXTO DE LA BARRA DE MENÚ DEPENDIENDO DE LA POSICIÓN DEL SCROLL.
document.addEventListener("DOMContentLoaded", function(){

const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('.opciones-menu');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
});
