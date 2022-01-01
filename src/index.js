const GameView = require("./scripts/gameView")
window.GameView = GameView;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// create road
ctx.fillStyle = '#838383';
ctx.fillRect(0, 400, 1000, 140)

// create lines on road
ctx.fillStyle = 'yellow';
for (let counter = 0; counter < 11; counter++) ctx.fillRect((100 * counter), 460, 50, 10);

// loading pig - move
const pig = new Image(); 
pig.addEventListener('load', () => ctx.drawImage(pig, 0, 250, 256, 256)); 
pig.src = "src/images/pig1.png"

// loading knife - move
const knife = new Image();
knife.addEventListener('load', () => ctx.drawImage(knife, 800, 170));
knife.src = "src/images/knife.png";

// loading traffic cone - move 
const trafficcone = new Image();
trafficcone.addEventListener('load', () => ctx.drawImage(trafficcone, 300, 250));
trafficcone.src = "src/images/trafficcone.png";

// loading pan - move
const pan = new Image();
pan.addEventListener('load', () => ctx.drawImage(pan, 500, 170));
pan.src = "src/images/pan.png";

// loading apple - move
const apple = new Image();
apple.addEventListener('load', () => ctx.drawImage(apple, 800, 250));
apple.src = "src/images/apple.png";

// start game
ctx.fillStyle = 'black';
ctx.font = '50px Shizuru';
ctx.fillText('Press any key to start!', 185, 250);

// stage - level
ctx.fillStyle = 'black';
ctx.font = '40px Shizuru';
ctx.fillText('1-1', 945, 40) // replace 1-1 with this.stage this.level