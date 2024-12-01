let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.imagens img');
    
    // Reseta o índice se estiver fora dos limites
    if (slideIndex >= slides.length) { 
        slideIndex = 0; 
    }
    if (slideIndex < 0) { 
        slideIndex = slides.length - 1; 
    }
    
    // Esconde todos os slides, exceto o atual
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

// Função para mover os slides
function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

// Adiciona eventos para os botões de navegação
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Inicia a exibição dos slides ao carregar a página
document.addEventListener('DOMContentLoaded', showSlides);