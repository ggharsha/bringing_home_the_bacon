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

const pig = new Image(); 
pig.addEventListener('load', () => ctx.drawImage(pig, 0, 250, 256, 256)); 
pig.src = "src/images/pig1.png"

const knife = new Image();
knife.addEventListener('load', () => ctx.drawImage(knife, 800, 170));
knife.src = "src/images/knife.png";

const trafficcone = new Image();
trafficcone.addEventListener('load', () => ctx.drawImage(trafficcone, 300, 250));
trafficcone.src = "src/images/trafficcone.png";

// start game
ctx.fillStyle = 'black';
ctx.font = '50px Shizuru';
ctx.fillText('Press any key to start!', 185, 250);

// stage - level
ctx.fillStyle = 'black';
ctx.font = '40px Shizuru';
ctx.fillText('1-1', 945, 40) // replace 1-1 with this.stage this.level