let loadingProgress = 0; // Initial progress value (0 to 1)

function drawLoadingBar() {
    const startImageSrc = './assets/loading/start.png';
    const endImageSrc = './assets/loading/end.png';
    const middleImageSrc = './assets/loading/middle.png';
    const middlePartImageSrc = './assets/loading/middlepart.png';

    const startImage = new Image();
    const endImage = new Image();
    const middleImage = new Image();
    const middlePartImage = new Image();

    startImage.src = startImageSrc;
    endImage.src = endImageSrc;
    middleImage.src = middleImageSrc;
    middlePartImage.src = middlePartImageSrc;

    let imagesLoaded = 0;
    const totalImages = 4;

    function onLoad() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            updateLoading();
        }
    }

    startImage.onload = onLoad;
    endImage.onload = onLoad;
    middleImage.onload = onLoad;
    middlePartImage.onload = onLoad;

    function draw() {
        const canvas = window.canvas;
        const ctx = window.ctx;
        const barWidth = 300; // Reduced width (50%)
        const barHeight = 25; // Reduced height (50%)
        const startX = (canvas.width - barWidth) / 2;
        const startY = canvas.height / 2 + 100;

        // Disable shadow effect
        ctx.shadowColor = 'transparent';

        // Draw the start of the loading bar
        ctx.drawImage(startImage, startX, startY, startImage.naturalWidth / 2, barHeight);

        // Draw the middle part of the loading bar (non-colored)
        const middleWidth = barWidth - startImage.naturalWidth / 2 - endImage.naturalWidth / 2;
        ctx.drawImage(middleImage, startX + startImage.naturalWidth / 2, startY, middleWidth, barHeight);

        // Draw the end of the loading bar
        ctx.drawImage(endImage, startX + startImage.naturalWidth / 2 + middleWidth, startY, endImage.naturalWidth / 2, barHeight);

        // Draw the colored part to indicate progress
        const coloredWidth = loadingProgress * middleWidth;
        ctx.drawImage(middlePartImage, startX + startImage.naturalWidth / 2, startY, coloredWidth, barHeight);
    }

    function updateLoading() {
        if (loadingProgress < 1) {
            loadingProgress += 0.01;
            if (loadingProgress > 1) loadingProgress = 1;
            draw();
            requestAnimationFrame(updateLoading);
        } else {
            console.log("Loading complete");
            handleLoadingComplete();
        }
    }

    function handleLoadingComplete() {
        // Clear the loading bar but keep the background
        const canvas = window.canvas;
        const ctx = window.ctx;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawBackground(); // Redraw the background
        drawAccountRegisterScreen(); // Load the account registration screen
    }

    updateLoading();
}
