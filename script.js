// Initialisation des animations au scroll
AOS.init({
    duration: 1000,
    once: false, // L'animation se rejoue si on remonte
    mirror: true
});

// Redirection
function goToSettings() {
    window.location.href = 'settings/';
}

// Effet de parallaxe sur le texte au scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroText = document.querySelector('h1');
    if (heroText) {
        heroText.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroText.style.opacity = 1 - (scrolled / 700);
    }
});
