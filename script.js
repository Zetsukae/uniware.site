AOS.init({ duration: 1000, once: false, mirror: true });

function goToSettings() { window.location.href = 'settings/'; }

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroText = document.querySelector('h1');
    if (heroText) {
        heroText.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroText.style.opacity = 1 - (scrolled / 700);
    }
});

function startUnderfang() {
    const wrapper = document.getElementById('godot-wrapper');
    const loader = document.getElementById('godot-loader');
    
    loader.querySelector('p').innerText = "SYNCHRONISATION DU PCK...";

    setTimeout(() => {
        loader.style.display = 'none';
        const game = document.createElement('iframe');
        
        game.src = "./Underfang-DEMO/Underfang-DEMO-Web.html";
        
        // Autorisations nécessaires
        game.allow = "autoplay; fullscreen; focus-without-user-activation";
        game.style.width = "100%";
        game.style.height = "100%";
        game.style.border = "none";
        
        wrapper.appendChild(game);
    }, 800);
}
