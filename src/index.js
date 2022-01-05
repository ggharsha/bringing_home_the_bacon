import GameView from "./scripts/gameView";
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'black';
    // ctx.font = '50px Shizuru';
    // ctx.fillText('Click the window to start!', 150, 270)
    
const clickToStart = new Image();
clickToStart.addEventListener('load', () => ctx.drawImage(clickToStart, 150, 230));
clickToStart.src = "src/images/clickToStart.png";
const pigDisp = new Image();
pigDisp.addEventListener('load', () => ctx.drawImage(pigDisp, 408, 350));
pigDisp.src = "src/images/newPig1.png"
canvas.addEventListener('click', () => {
    const newGame = new GameView(ctx);
    newGame.start();
});