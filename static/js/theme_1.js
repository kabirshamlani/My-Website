// theme.js
function setView(viewName) {
    const iphoneContainer = document.getElementById('iphoneContainer');
    const contentContainer = document.getElementById('contentContainer');
    const iframe = document.getElementById('iphoneScreen');
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('footer');

    if (viewName === 'phone') {
        iphoneContainer.style.display = 'flex';
        contentContainer.style.display = 'none';
        iframe.src = `${window.location.origin}${window.location.pathname}?iframe=true`; // Load the content without the iPhone frame
        navbar.style.display = 'none';
        footer.style.display = 'none';
    } else {
        iphoneContainer.style.display = 'none';
        contentContainer.style.display = 'block';
        iframe.src = ""; // Clear the iframe source
        navbar.style.display = 'flex';
        footer.style.display = 'block';
    }
}

function setTheme(themeName) {
    document.body.className = themeName + " " + (document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    localStorage.setItem('theme', themeName);
}

function toggleDarkMode() {
    const bodyClass = document.body.classList;
    if (bodyClass.contains('dark-mode')) {
        bodyClass.remove('dark-mode');
        bodyClass.add('light-mode');
        localStorage.setItem('mode', 'light-mode');
    } else {
        bodyClass.remove('light-mode');
        bodyClass.add('dark-mode');
        localStorage.setItem('mode', 'dark-mode');
    }
    setTheme(localStorage.getItem('theme') || 'default-theme');
}

// Apply the saved theme and mode on load
(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const isIframe = urlParams.get('iframe');

    if (!isIframe) {
        const savedMode = localStorage.getItem('mode') || 'light-mode';
        document.body.classList.add(savedMode);

        const savedTheme = localStorage.getItem('theme') || 'default-theme';
        document.body.classList.add(savedTheme);
    }

    // Hide phone view option on mobile browsers
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.getElementById('phoneViewBtn').style.display = 'none';
    }
})();
