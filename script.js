function changeBackground(imagePath) {
    document.body.style.backgroundImage = `url('${imagePath}')`;
    document.body.style.backgroundSize = 'cover'; // Adjust as needed
}

function restoreBackground() {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'blue'; // Set your default background color
}
