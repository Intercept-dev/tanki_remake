// Initialize the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log('Canvas and context initialized');

// Expose the canvas and context to other scripts
window.canvas = canvas;
window.ctx = ctx;

// Initialize background and loading functions
function init() {
    setTimeout(() => {
        if (typeof drawBackground === 'function' && typeof drawLoadingBar === 'function') {
            updateCanvas();
        } else {
            console.error('Required drawing functions are not defined.');
        }
    }, 100);
}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing

    drawBackground(); // Draw the background first
    drawLoadingBar(); // Then draw the loading bar on top
}

// After loading bar is complete
function onLoadingComplete() {
    // Remove the loading bar elements and keep the background
    drawBackground(); // Redraw the background to ensure it is visible
    drawAccountRegisterScreen(); // Load the account registration screen
}

// Function to handle "New player" click
function handleNewPlayerClick() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Remove elements related to the account registration screen
    removeAccountRegisterElements();

    // Dynamically load the createAccount.js script
    const script = document.createElement('script');
    script.src = 'js/createAccount.js';
    script.onload = () => {
        if (typeof loadMainImage === 'function') {
            loadMainImage(); // Call function to load the main image
        }
    };
    script.onerror = () => console.error('Failed to load createAccount.js');
    document.body.appendChild(script);
}

// Function to remove elements related to the account registration screen
function removeAccountRegisterElements() {
    const inputWrapper = document.getElementById('inputWrapper');
    if (inputWrapper) {
        inputWrapper.remove();
    }

    // Remove the interactive square and "Remember me" text
    const interactiveSquareContainer = document.querySelector('.interactive-square-container');
    if (interactiveSquareContainer) {
        interactiveSquareContainer.remove();
    }

    // Remove any text links specific to the account registration screen
    const textLinks = document.querySelectorAll('a');
    textLinks.forEach(link => {
        if (link.textContent === 'New player' || link.textContent === 'Lost nickname or password?') {
            link.remove();
        }
    });
}

// Expose the function to the global scope
window.handleNewPlayerClick = handleNewPlayerClick;

// Call init to set everything up
init();