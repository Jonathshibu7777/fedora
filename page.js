function toggleDarkMode() {
    const body = document.body;
    const floatingCard = document.getElementById('floating-card');
    const modeIcon = document.getElementById('mode-icon');
    const slopedContainer = document.getElementById('sloped-container');
    
    body.classList.toggle('dark-mode');
    floatingCard.classList.toggle('dark-mode');
    slopedContainer.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        modeIcon.src = "https://img.icons8.com/ios-glyphs/30/FFFFFF/sun--v1.png";
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        modeIcon.src = "https://img.icons8.com/sf-regular-filled/48/000000/moon-symbol.png";
        localStorage.setItem('dark-mode', 'disabled');
    }
}

// Optional: Load dark mode state from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('floating-card').classList.add('dark-mode');
        document.getElementById('sloped-container').classList.add('dark-mode');
        document.getElementById('mode-icon').src = "https://img.icons8.com/ios-glyphs/30/FFFFFF/sun--v1.png";
    } else {
        document.getElementById('mode-icon').src = "https://img.icons8.com/sf-regular-filled/48/000000/moon-symbol.png";
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        const floatingCard = document.getElementById('floating-card');
        floatingCard.style.display = 'block';
    });
    link.addEventListener('mouseout', () => {
        const floatingCard = document.getElementById('floating-card');
        floatingCard.style.display = 'none';
    });
});

document.getElementById('floating-card').addEventListener('mouseover', () => {
    const floatingCard = document.getElementById('floating-card');
    floatingCard.style.display = 'block';
});

document.getElementById('floating-card').addEventListener('mouseout', () => {
    const floatingCard = document.getElementById('floating-card');
    floatingCard.style.display = 'none';
});
