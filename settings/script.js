// Initialisation AOS
AOS.init({ duration: 800, once: true });

const Storage = {
    isEnabled: localStorage.getItem('uniware_storage') !== 'false',
    
    clearAll() {
        localStorage.clear();
        // On réactive le flag de base après un clear complet
        localStorage.setItem('uniware_storage', this.isEnabled);
        alert('Toutes les données locales ont été supprimées.');
    }
};

function showSection(id, element) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    
    document.getElementById(id).classList.add('active');
    element.classList.add('active');
}

function toggleLocalStorage(el) {
    Storage.isEnabled = !Storage.isEnabled;
    localStorage.setItem('uniware_storage', Storage.isEnabled);
    el.classList.toggle('active');
}

function clearAllData() {
    if (confirm('Voulez-vous vraiment réinitialiser vos réglages ?')) {
        Storage.clearAll();
    }
}

// Lancement
window.onload = () => {
    const toggle = document.getElementById('localStorageToggle');
    if (!Storage.isEnabled) toggle.classList.remove('active');
};
