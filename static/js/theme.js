// theme.js
function setTheme(themeName) {
    console.log("Setting theme to:", themeName);  // Log the theme being set
    localStorage.setItem('theme', themeName);
    applyTheme();
}

function applyTheme() {
    const savedTheme = localStorage.getItem('theme') || 'default';
    console.log("Applying theme:", savedTheme);  // Log the theme being applied
    document.body.className = savedTheme;
}


function toggleDarkMode() {
    const bodyClass = document.body.classList;
    console.log("Current mode before toggle:", bodyClass.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    if (bodyClass.contains('dark-mode')) {
        bodyClass.remove('dark-mode');
        bodyClass.add('light-mode');
    } else {
        bodyClass.remove('light-mode');
        bodyClass.add('dark-mode');
    }
    console.log("New mode after toggle:", bodyClass.contains('dark-mode') ? 'dark-mode' : 'light-mode');
}


// Add functionality to switch views
// theme.js

// function setView(view) {
//     const iphoneContainer = document.getElementById('iphoneContainer');
//     const contentContainer = document.getElementById('contentContainer');
//     const iframe = document.getElementById('iphoneScreen');

//     if (view === 'phone') {
//         iphoneContainer.style.display = 'block'; // Show iPhone frame
//         iframe.src = document.location.href; // Load the current page inside the iframe
//         contentContainer.style.display = 'none'; // Hide normal content view
//     } else {
//         iphoneContainer.style.display = 'none'; // Hide iPhone frame
//         iframe.src = ''; // Clear the iframe
//         contentContainer.style.display = 'block'; // Show normal content view
//     }
// }

function setView(view) {
    const iphoneContainer = document.getElementById('iphoneContainer');
    const contentContainer = document.getElementById('contentContainer');
    const iframe = document.getElementById('iphoneScreen');

    if (view === 'phone') {
        iphoneContainer.style.display = 'block'; // Show iPhone frame
        iframe.src = document.location.href+"_mobile"; // Load the current page inside the iframe
        console.log("iframe.src:", iframe.src)
        contentContainer.style.display = 'none'; // Hide normal content view
        // Animation for sliding into the frame
        iphoneContainer.animate([
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 500,
            fill: 'forwards'
        });
    } else {
        iphoneContainer.style.display = 'none'; // Hide iPhone frame
        iframe.src = ''; // Clear the iframe
        contentContainer.style.display = 'block'; // Show normal content view
    }
}


// Attach event listeners to view buttons
document.getElementById('laptopViewBtn').addEventListener('click', function () {
    setView('laptop');
});
document.getElementById('phoneViewBtn').addEventListener('click', function () {
    setView('phone');
});

// Apply the saved theme and mode on load
(function () {
    const savedMode = localStorage.getItem('mode') || 'light-mode';
    document.body.classList.add(savedMode);
    applyTheme();

    // Default to laptop view
    setView('laptop');
})();
