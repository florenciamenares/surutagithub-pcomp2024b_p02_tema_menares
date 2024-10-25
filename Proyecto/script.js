let currentSlide = 0; // Índice del slide actual
const slides = document.querySelectorAll('.carousel-slide > div'); // Seleccionar todos los divs dentro del carrusel
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Mover el carrusel a la posición correcta
    const offset = -currentSlide * 100; // Desplazamiento en porcentaje
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

// Funciones para controlar el movimiento
document.querySelector('.prev').addEventListener('click', function() {
    showSlide(currentSlide - 1); // Mover a la anterior
});

document.querySelector('.next').addEventListener('click', function() {
    showSlide(currentSlide + 1); // Mover a la siguiente
});

// Inicializar el carrusel mostrando el primer slide
showSlide(currentSlide);

