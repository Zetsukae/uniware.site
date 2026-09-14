AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
    offset: 16
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let soonScrollTick = false;

window.addEventListener('scroll', () => {
    if (reduceMotion || soonScrollTick) return;

    soonScrollTick = true;
    window.requestAnimationFrame(() => {
        const scrollValue = Math.min(window.scrollY, 180);
        const brandText = document.querySelector('.brand-text');

        if (brandText) {
            brandText.style.transform = `translateY(${scrollValue * 0.08}px)`;
            brandText.style.opacity = String(Math.max(0.78, 1 - (scrollValue / 680)));
            brandText.style.transition = 'transform 280ms cubic-bezier(.2,.8,.2,1), opacity 280ms ease-out';
        }

        soonScrollTick = false;
    });
}, { passive: true });
