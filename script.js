AOS.init({ duration: 1000, once: true });

function goToSettings() { window.location.href = 'settings/'; }

function launchGame() {
    const wrapper = document.getElementById('game-wrapper');
    const overlay = document.getElementById('game-overlay');
    const status = document.getElementById('status-text');
    const fsBtn = document.getElementById('fullscreen-btn');

    status.innerText = "SYNCHRONISATION DU NOYAU...";

    setTimeout(() => {
        overlay.style.display = 'none';
        fsBtn.style.display = 'block';
        
        const iframe = document.createElement('iframe');
        iframe.src = "./Underfang-DEMO/Underfang-DEMO-Web.html";
        iframe.allow = "autoplay; fullscreen; pointer-lock"; 
        iframe.id = "game-iframe";
        
        wrapper.appendChild(iframe);
    }, 800);
}

function toggleFullscreen() {
    const container = document.getElementById('main-game-container');
    
    if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => {
            console.error(`Erreur : ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}
