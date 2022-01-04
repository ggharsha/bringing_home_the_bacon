import GameView from "./scripts/gameView";
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.font = '50px Shizuru';
ctx.fillText('Click the window to start!', 150, 270);
canvas.addEventListener('click', () => {
    const newGame = new GameView(ctx);
    newGame.start();
});