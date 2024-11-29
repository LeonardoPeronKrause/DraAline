// Função para alternar o menu
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

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

document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault(); // Previne o comportamento padrão do link

    // Esconde o #home
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');

    // Rola suavemente para a próxima seção
    document.getElementById('procedimentos').scrollIntoView({ behavior: 'smooth' });
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
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Mostra a primeira imagem ao carregar
showSlide(currentIndex);

// Altera a imagem a cada 3 segundos
setInterval(nextSlide, 3000);

