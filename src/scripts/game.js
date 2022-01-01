const Pig = require("./pig");
const TrafficCone = require("./trafficCone");
const Knife = require("./knife");
const Background = require("./background");
const Level1 = require("./1-1");
const Level2 = require("./1-2");
const Level3 = require("./1-3");
const Level4 = require("./1-4");
const Level5 = require("./1-5");

function Game(ctx) {
    DIM_X = 1000;
    DIM_Y = 600;
    this.ctx = ctx;
    this.stage = 1;
    this.level = 1;
    this.lives = 3;
    this.lose = false;
}

// revision - wont use this // this method is only for the road stripes and buildings
// Game.prototype.wrap = function(pos) {
//     if (pos[0] < 0) pos[0] = DIM_X + pos[0];
//     else pos[0] = pos[0] % DIM_X;
// }

Game.prototype.start = function() {
    // load level
}

Game.prototype.draw = function() {
}

// runs 1 tick of gameplay
Game.prototype.step = function() {
    // clearRect
    this.game.draw
    this.checkCollisions;
}

// checks for collisions on each tick
Game.prototype.checkCollisions = function() {
}

Game.prototype.gameOver = function() {
    if (this.lives === 0) this.lose = true;
    else this.lose = false;
}

module.exports = Game;