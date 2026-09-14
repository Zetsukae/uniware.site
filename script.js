AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
    offset: 16
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let scrollTick = false;

window.addEventListener('scroll', () => {
    if (reduceMotion || scrollTick) return;

    scrollTick = true;
    window.requestAnimationFrame(() => {
        const scrolled = Math.min(window.scrollY, 160);
        const heroText = document.querySelector('h1');
        if (heroText) {
            heroText.style.transform = `translateY(${scrolled * 0.12}px)`;
            heroText.style.opacity = String(Math.max(0.78, 1 - (scrolled / 900)));
            heroText.style.transition = 'transform 280ms cubic-bezier(.2,.8,.2,1), opacity 280ms ease-out';
        }
        scrollTick = false;
    });
}, { passive: true });
