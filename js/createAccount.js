// Function to load and draw the main image on the canvas
function loadMainImage() {
    const canvas = window.canvas;
    const ctx = window.ctx;
    const imageSrc = './assets/account_gui/create_acc/main-image.jpg'; // Path to the main image

    // Clear the canvas before drawing the new image
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Load the main image
    loadImage(imageSrc, (image) => {
        // Draw the image on the canvas
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    });
}

// Function to load images asynchronously
function loadImage(src, callback) {
    const img = new Image();
    img.src = src;
    img.onload = () => callback(img);
    img.onerror = () => console.error(Failed to load image: ${src});
}

// Expose the function to the global scope
window.loadMainImage = loadMainImage;