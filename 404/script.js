// Initialisation AOS
AOS.init({ duration: 1000, once: true });

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

// Écouteur de touche
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Focus automatique au chargement
window.onload = () => {
    searchInput.focus();
};

// Effet de feedback tactile sur le bouton
const btn = document.querySelector('.btn-back');
btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.95)');
btn.addEventListener('mouseup', () => btn.style.transform = 'translateY(-3px)');
