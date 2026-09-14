const dreamWord = document.getElementById('dreamWord');

if (dreamWord) {
    window.setTimeout(() => {
        dreamWord.classList.add('dream-word-glitch');
        dreamWord.textContent = dreamWord.dataset.word || 'in my dreams';
    }, 77000);
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let closeScrollTick = false;

window.addEventListener('scroll', () => {
    if (reduceMotion || closeScrollTick) return;

    closeScrollTick = true;
    window.requestAnimationFrame(() => {
        const scrollValue = Math.min(window.scrollY, 180);
        const brandText = document.querySelector('.brand-text');

        if (brandText) {
            brandText.style.transform = `translateY(${scrollValue * 0.08}px)`;
            brandText.style.opacity = String(Math.max(0.78, 1 - (scrollValue / 680)));
            brandText.style.transition = 'transform 280ms cubic-bezier(.2,.8,.2,1), opacity 280ms ease-out';
        }

        closeScrollTick = false;
    });
}, { passive: true });
