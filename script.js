AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

function goToSettings() {
    window.location.href = 'settings/';
}

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroText = document.querySelector('h1');
    if (heroText) {
        heroText.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroText.style.opacity = 1 - (scrolled / 700);
    }
});

function launchGame() {
    const wrapper = document.getElementById('game-wrapper');
    const overlay = document.getElementById('game-overlay');
    const status = document.getElementById('status-text');
    const btn = document.querySelector('.play-btn-large');

    btn.style.display = 'none';
    status.innerText = "CHARGEMENT DES DONNÉES...";
    status.style.color = "#fff";

    setTimeout(() => {
        overlay.style.display = 'none';
        const iframe = document.createElement('iframe');
        // Chemin vers ton fichier HTML dans le sous-dossier
        iframe.src = './Underfang-DEMO/Underfang-DEMO-Web.html';
        iframe.allow = "autoplay; fullscreen; focus-without-user-activation";
        wrapper.appendChild(iframe);
    }, 600);
}
