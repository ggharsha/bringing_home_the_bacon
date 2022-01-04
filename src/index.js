// const GameView = require("./scripts/gameView");
// window.GameView = GameView;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// // start game
ctx.fillStyle = 'black';
ctx.font = '50px Shizuru';
ctx.fillText('Press any key to start!', 185, 250);


import Game from "./scripts/game";
window.Game = Game;
const newGame = new Game(ctx);
newGame.levelOne();
newGame.startAnimating(10);