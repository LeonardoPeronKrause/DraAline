// Função para alternar o menu
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

// Função para scroll suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Scroll suave para a seção desejada
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
        
        // Fechar o menu ao clicar em um item
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("active");
    });
});

// Efeito de fade-in ao carregar cada seção
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section, header");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, 200 * index); // Atraso para cada seção
    });
});

// Observer para efeito de fade-in ao rolar para itens da seção 'procedimentos'
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll("#procedimentos ul li").forEach(item => {
    observer.observe(item);
});

// Funcionalidade de Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow .slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Troca de imagem a cada 5 segundos
showSlide(currentSlide); // Mostra o primeiro slide