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
    };
}

window.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp" || e.code === "ArrowDown" || e.code === "Space") e.preventDefault();
});

import GameView from "./scripts/gameView";
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', () => {
    const clickToStart = new Image();
    clickToStart.addEventListener('load', () => ctx.drawImage(clickToStart, 150, 230));
    clickToStart.src = "src/images/clickToStart.png";
    const pigDisp = new Image();
    pigDisp.addEventListener('load', () => ctx.drawImage(pigDisp, 408, 350));
    pigDisp.src = "src/images/newPig1.png"
})

const games = [];

canvas.addEventListener('click', () => {
    if (games.length === 0) {
        const newGame = new GameView(ctx);
        games.push(newGame);
        newGame.start();
    };
})