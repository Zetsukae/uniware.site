AOS.init({ duration: 1000, once: true });

function launchGame() {
    const wrapper = document.getElementById('game-wrapper');
    const overlay = document.getElementById('game-overlay');
    const status = document.getElementById('status-text');

    status.innerText = "LOADING ENGINE...";

    setTimeout(() => {
        overlay.style.display = 'none';
        const iframe = document.createElement('iframe');
        iframe.src = "./Underfang-DEMO/Underfang-DEMO-Web.html";
        iframe.allow = "autoplay; fullscreen";
        wrapper.appendChild(iframe);
    }, 800);
}
