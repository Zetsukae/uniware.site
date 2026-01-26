// Initialise les animations au défilement
AOS.init({
    duration: 1000, // Durée de l'animation
    easing: 'ease-out-back', // Courbe d'animation fluide
    once: false, // L'animation se rejoue si on remonte et redescend
    mirror: true 
});

// Petit effet de mouvement sur le titre au scroll
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const brandText = document.querySelector('.brand-text');
    
    if (brandText) {
        brandText.style.transform = `translateY(${scrollValue * 0.15}px)`;
        brandText.style.opacity = 1 - (scrollValue / 600);
    }
});
