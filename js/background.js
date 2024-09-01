function drawBackground() {
    const bgImageSrc = './assets/background/bg.png';
    const bgImage = new Image();
    bgImage.src = bgImageSrc;

    bgImage.onload = function() {
        const canvas = window.canvas;
        const ctx = window.ctx;
        const bgWidth = bgImage.naturalWidth;
        const bgHeight = bgImage.naturalHeight;

        const numCols = Math.ceil(canvas.width / bgWidth);
        const numRows = Math.ceil(canvas.height / bgHeight);

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                const x = col * bgWidth;
                const y = row * bgHeight;
                ctx.drawImage(bgImage, x, y);
            }
        }
    };
}

// Expose the function to the global scope
window.drawBackground = drawBackground;