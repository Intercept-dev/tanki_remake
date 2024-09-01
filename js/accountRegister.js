// Function to create and inject CSS styles for the account registration screen
function injectAccountRegisterStyles() {
    const css = 
        /* Custom input styles */
        .custom-input {
            background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 70%);
            color: #fff;
            padding: 2px;
            height: 26px;
            width: 230px;
            border-radius: 5px;
            border: 1px solid rgba(162, 162, 162, 0.7);
            box-shadow: 0 1px rgba(0, 0, 0, 0.1);
            font-size: 14px;
            outline: none;
        }

        /* Password input field with MyriadPro font */
        .custom-input.password {
            font-family: "MyriadPro", Arial, sans-serif;
        }

        /* Input focus styles */
        input:focus {
            outline: none;
        }

        /* Input wrapper for positioning */
        #inputWrapper {
            position: absolute;
            display: none; /* Initially hidden; shown when the screen is drawn */
            flex-direction: column;
            gap: 10px; /* Space between the two inputs */
        }

        /* Optional: Styling for placeholder text */
        .custom-input::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }

        /* Remove outline from any button-like elements */
        button, input[type="button"], input[type="submit"], a {
            outline: none;
        }

        /* Remove outline from all elements when focused */
        *:focus {
            outline: none;
        }

        /* Styling for text links */
        a {
            color: #2ed139;
            text-decoration: underline;
            font-size: 11px;
            position: absolute;
            cursor: pointer;
        }

        /* Interactive square styling */
        .interactive-square-container {
            position: absolute;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .interactive-square {
            width: 25px;
            height: 25px;
            background: linear-gradient(to bottom, #999999 0%, #333333 100%);
            border-radius: 5px;
            border: 2px solid #000000;
            position: relative;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            overflow: hidden;
        }

        .interactive-square::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.2) 0%,
                rgba(255, 255, 255, 0.2) 2%,
                rgba(255, 255, 255, 0) 2%,
                rgba(255, 255, 255, 0) 4%
            );
        }

        .interactive-square:hover::before {
            background: repeating-linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.3) 0%,
                rgba(255, 255, 255, 0.3) 2%,
                rgba(255, 255, 255, 0) 2%,
                rgba(255, 255, 255, 0) 4%
            );
        }

        .interactive-square:active::before {
            background: repeating-linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.4) 0%,
                rgba(255, 255, 255, 0.4) 2%,
                rgba(255, 255, 255, 0) 2%,
                rgba(255, 255, 255, 0) 4%
            );
        }

        .interactive-square-text {
            margin-left: 7px;
            color: #fff;
            font-size: 13px;
        }
    ;

    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}

// Call this function when the account registration screen is loaded
injectAccountRegisterStyles();

// Your existing code for account registration screen


// Function to create the interactive square and "Remember me" text
function createInteractiveSquare(x, y) {
    // Remove existing interactive square if it exists
    const existingContainer = document.querySelector('.interactive-square-container');
    if (existingContainer) {
        document.body.removeChild(existingContainer);
    }

    // Create container for interactive square and text
    const container = document.createElement('div');
    container.classList.add('interactive-square-container');
    container.style.position = 'absolute';
    container.style.left = ${x}px;
    container.style.top = ${y}px;

    // Create interactive square
    const square = document.createElement('div');
    square.classList.add('interactive-square');
    square.id = 'interactiveSquare';
    container.appendChild(square);

    // Create "Remember me" text
    const text = document.createElement('span');
    text.classList.add('interactive-square-text');
    text.textContent = 'Remember me';
    container.appendChild(text);

    // Append container to body
    document.body.appendChild(container);

    // Add click event listener to toggle image
    const checkImageSrc = './assets/account_gui/login_screen/images/check.png';
    let isChecked = false;
    square.onclick = function() {
        if (!isChecked) {
            loadImage(checkImageSrc, (img) => {
                square.style.backgroundImage = url(${checkImageSrc});
                square.style.backgroundSize = 'contain'; // Ensure the image fits well within the square
            });
            isChecked = true;
        } else {
            square.style.backgroundImage = 'none';
            isChecked = false;
        }
    };
}

// Function to load images asynchronously
function loadImage(src, callback) {
    const img = new Image();
    img.src = src;
    img.onload = () => callback(img);
    img.onerror = () => console.error(Failed to load image: ${src});
}

// Function to show the interactive elements
function showInteractiveElements() {
    const x = 50; // Example x position, adjust as needed
    const y = 10; // Example y position, adjust as needed
    createInteractiveSquare(x, y);
}

// Function to hide the interactive elements
function hideInteractiveElements() {
    const container = document.querySelector('.interactive-square-container');
    if (container) {
        document.body.removeChild(container);
    }
}

// Function to handle the "New player" click
function handleNewPlayerClick() {
    hideInteractiveElements(); // Hide the square and "Remember me" text
    const canvas = window.canvas;
    const ctx = window.ctx;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Load the create account GUI
    // Assuming the createAccount.js is included and loads the createAccount function
    if (typeof createAccount === 'function') {
        createAccount();
    } else {
        console.error('createAccount function is not available');
    }
}

// Function to draw the account registration screen
function drawAccountRegisterScreen() {
    const canvas = window.canvas;
    const ctx = window.ctx;
    const width = 360;
    const height = 187;
    const cornerRadius = 5;

    const bgImageSrc = './assets/background/bg.png';
    const imageSrc = './assets/account_gui/login_screen/image.png';
    const loginThingSrc = './assets/account_gui/login_screen/images/login_thing.png';
    const textSrc = './assets/account_gui/login_screen/images/text.png';

    // Load all images needed for the screen
    loadImage(bgImageSrc, (bgImage) => {
        loadImage(imageSrc, (image) => {
            loadImage(loginThingSrc, (loginThing) => {
                loadImage(textSrc, (text) => {
                    drawScreen(canvas, ctx, bgImage, image, width, height, cornerRadius, loginThing, text);
                });
            });
        });
    });

    // Show interactive elements
    showInteractiveElements();
}

// Function to draw the entire screen with the loaded assets
function drawScreen(canvas, ctx, bgImage, image, width, height, cornerRadius, loginThing, text) {
    const x = (canvas.width - width) / 2;
    const y = ((canvas.height - height) / 2) + 22;

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Tile the background image across the canvas
    for (let i = 0; i < canvas.width; i += bgImage.width) {
        for (let j = 0; j < canvas.height; j += bgImage.height) {
            ctx.drawImage(bgImage, i, j);
        }
    }

    // Disable image smoothing for sharp rendering
    ctx.imageSmoothingEnabled = false;
    const pattern = ctx.createPattern(image, 'repeat');
    ctx.fillStyle = pattern;

    // Draw the rounded rectangle
    ctx.beginPath();
    ctx.moveTo(x + cornerRadius, y);
    ctx.lineTo(x + width - cornerRadius, y);
    ctx.arcTo(x + width, y, x + width, y + cornerRadius, cornerRadius);
    ctx.lineTo(x + width, y + height - cornerRadius);
    ctx.arcTo(x + width, y + height, x + width - cornerRadius, y + height, cornerRadius);
    ctx.lineTo(x + cornerRadius, y + height);
    ctx.arcTo(x, y + height, x, y + height - cornerRadius, cornerRadius);
    ctx.lineTo(x, y + cornerRadius);
    ctx.arcTo(x, y, x + cornerRadius, y, cornerRadius);
    ctx.closePath();
    ctx.fill();

    // Draw the login bar image
    const loginThingX = x + (width - loginThing.width) / 2;
    const loginThingY = y - loginThing.height + 13;
    ctx.drawImage(loginThing, loginThingX, loginThingY);

    // Draw the text inside the login bar
    const textX = loginThingX + (loginThing.width - text.width) / 2;
    const textY = loginThingY + (loginThing.height - text.height) / 2;
    ctx.drawImage(text, textX, textY);

    // Draw labels for input fields
    ctx.font = "12px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "right";
    const labelX = x + width - loginThing.width + canvas.offsetLeft - 40;
    const labelY = y + (height - loginThing.height * 2) / 3 + canvas.offsetTop + 29;
    ctx.fillText("Login or email:", labelX, labelY);

    const labelY2 = labelY + 39;
    ctx.fillText("Password:", labelX, labelY2);

    // Position the input fields precisely
    const inputWrapper = document.getElementById('inputWrapper');
    const rightThingX = x + width - loginThing.width + canvas.offsetLeft - 30;
    const rightThingY1 = y + (height - loginThing.height * 2) / 3 + canvas.offsetTop + 8;

    inputWrapper.style.position = 'absolute';
    inputWrapper.style.left = ${rightThingX}px;
    inputWrapper.style.top = ${rightThingY1}px;
    inputWrapper.style.display = 'flex';
    inputWrapper.style.flexDirection = 'column';
    inputWrapper.style.gap = '10px'; // Space between the two inputs

    // Display the inputWrapper after drawing the screen
    inputWrapper.style.display = 'flex';

    // Recreate the "New player" and "Lost nickname or password?" links
    createTextLink("New player", labelX + 10, labelY - 45, "#2ed139", "11px", "#", handleNewPlayerClick);
    createTextLink("Lost nickname or password?", labelX + 107, labelY - 45, "#2ed139", "11px", "#");

    // Add interactive square and text back to the previous position
    createInteractiveSquare(x + width - 50, y + height - 45); // Adjust x and y if necessary
}

// Function to create clickable text links
function createTextLink(text, x, y, color, fontSize, href, onClick) {
    const link = document.createElement('a');
    link.textContent = text;
    link.href = href;
    link.style.position = 'absolute';
    link.style.left = ${x}px;
    link.style.top = ${y}px;
    link.style.color = color;
    link.style.textDecoration = 'underline';
    link.style.cursor = 'pointer';
    link.style.fontSize = fontSize;

    if (onClick) {
        link.onclick = function(e) {
            e.preventDefault();
            onClick();
        };
    }

    document.body.appendChild(link);
}

// Expose the function to the global scope
window.drawAccountRegisterScreen = drawAccountRegisterScreen;

// Call the function to initialize the account registration screen
window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Store the canvas and context in the window object for global access
    window.canvas = canvas;
    window.ctx = ctx;

    // Initialize the account registration screen
    drawAccountRegisterScreen();
};