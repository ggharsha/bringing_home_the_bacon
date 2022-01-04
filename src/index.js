// const GameView = require("./scripts/gameView");
// window.GameView = GameView;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// // start game
ctx.fillStyle = 'black';
ctx.font = '50px Shizuru';
ctx.fillText('Press any key to start!', 185, 250);

// // stage - level
// ctx.fillStyle = 'black';
// ctx.font = '40px Shizuru';
// ctx.fillText('Lv.1', 930, 40) // replace 1-1 with this.stage this.level

import Game from "./scripts/game";
window.Game = Game;
const newGame = new Game(ctx);
newGame.levelOne();
newGame.startAnimating(10);