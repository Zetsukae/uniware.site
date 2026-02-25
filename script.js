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
    const fsBtn = document.getElementById('fs-btn');

    status.innerText = "CONNECTING TO CORE...";

    setTimeout(() => {
        overlay.style.display = 'none';
        fsBtn.style.display = 'block';

        const iframe = document.createElement('iframe');
        iframe.src = "./Underfang-DEMO/Underfang-DEMO-Web.html";
        iframe.allow = "autoplay; fullscreen; pointer-lock";
        wrapper.appendChild(iframe);
    }, 1000);
}

function toggleFullscreen() {
    const box = document.getElementById('game-box');
    if (!document.fullscreenElement) {
        box.requestFullscreen().catch(err => {
            console.error("Erreur plein écran:", err);
        });
    } else {
        document.exitFullscreen();
    }
}
