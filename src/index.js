const modal = document.getElementById("modal");
const button = document.getElementById("button");
const span = document.getElementsByClassName("close")[0];
button.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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

const games = [];

canvas.addEventListener('click', () => {
    if (games.length === 0) {
        const newGame = new GameView(ctx);
        games.push(newGame);
        newGame.start();
    };
});