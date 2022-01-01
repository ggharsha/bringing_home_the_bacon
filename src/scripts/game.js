const Pig = require("./pig");
const TrafficCone = require("./trafficCone");
const Knife = require("./knife");
const Background = require("./background");

function Game(ctx) {
    DIM_X = 1000;
    DIM_Y = 600;
    this.ctx = ctx;
    this.stage = 1;
    this.level = 1;
    this.lives = 3;
    this.pig = new Pig({game: this});
}

// revision - wont use this // this method is only for the road stripes and buildings
// Game.prototype.wrap = function(pos) {
//     if (pos[0] < 0) pos[0] = DIM_X + pos[0];
//     else pos[0] = pos[0] % DIM_X;
// }

Game.prototype.draw = function() {
}

// runs 1 tick of gameplay
Game.prototype.step = function() {
    this.game.draw
    this.checkCollisions;
}

// checks for collisions on each tick
Game.prototype.checkCollisions = function() {
}

module.exports = Game;