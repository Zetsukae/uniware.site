AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
    offset: 16
});

const searchInput = document.getElementById('searchInput');

const searchEngines = {
    google: 'https://www.google.com/search?q=',
    qwant: 'https://www.qwant.com/?q=',
    duckduckgo: 'https://duckduckgo.com/?q='
};

function getDefaultSearchEngine() {
    return localStorage.getItem('searchEngine') || 'google';
}

function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        const engineBase = searchEngines[getDefaultSearchEngine()];
        window.location.href = `${engineBase}${encodeURIComponent(query)}`;
    }
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    window.addEventListener('load', () => {
        searchInput.focus({ preventScroll: true });
    });
}

const btn = document.querySelector('.btn-back');
if (btn) {
    btn.addEventListener('pointerdown', () => {
        btn.style.transform = 'scale(0.98)';
    });
    btn.addEventListener('pointerup', () => {
        btn.style.transform = 'translateY(-3px)';
    });
}
