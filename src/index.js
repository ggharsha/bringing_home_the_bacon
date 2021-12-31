const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#838383';
ctx.fillRect(0, 400, 1000, 140);
ctx.fillStyle = 'yellow';
ctx.fillRect(0, 460, 50, 10);
ctx.fillRect(100, 460, 50, 10);
ctx.fillRect(200, 460, 50, 10);
ctx.fillRect(300, 460, 50, 10);
ctx.fillRect(400, 460, 50, 10);
ctx.fillRect(500, 460, 50, 10);
ctx.fillRect(600, 460, 50, 10);
ctx.fillRect(700, 460, 50, 10);
ctx.fillRect(800, 460, 50, 10);
ctx.fillRect(900, 460, 50, 10);
const pig = document.getElementById('pig');
ctx.drawImage(pig, 0, 250)
// const image = new Image(60, 45); // Using optional size for image
// image.onload = drawImageActualSize; // Draw when image has loaded
// image.src = 'src/images/pig1.png';
// function drawImageActualSize() {
//     // Use the intrinsic size of image in CSS pixels for the canvas element
//     canvas.width = this.naturalWidth;
//     canvas.height = this.naturalHeight;

//     // Will draw the image as 300x227, ignoring the custom size of 60x45
//     // given in the constructor
//     ctx.drawImage(this, 0, 0);

//     // To use the custom size we'll have to specify the scale parameters
//     // using the element's width and height properties - lets draw one
//     // on top in the corner:
//     ctx.drawImage(this, 0, 0, this.width, this.height);
// }


