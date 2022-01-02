const Background = require("./background");
const Level1 = require("./levelOne");
const Level2 = require("./levelTwo");
const Level3 = require("./levelThree");
const Level4 = require("./levelFour");
const Level5 = require("./levelFive");

function Game(ctx) {
    DIM_X = 1000;
    DIM_Y = 600;
    this.ctx = ctx;
    // this.stage = 1;
    this.level = null;
    this.lives = 3;
    this.lose = false;
}

// revision - wont use this // this method is only for the road stripes and buildings
// Game.prototype.wrap = function(pos) {
//     if (pos[0] < 0) pos[0] = DIM_X + pos[0];
//     else pos[0] = pos[0] % DIM_X;
// }

Game.prototype.start = function() {
    this.level = new Level1(this);
}

Game.prototype.draw = function(ctx) {
    this.level.draw(ctx);
}

Game.prototype.move = function() {
    this.level.move();
}

// runs 1 tick of gameplay
Game.prototype.step = function() {
    this.game.draw(this.ctx);
    this.game.move();
    // this.checkCollisions;
}

// checks for collisions on each tick
Game.prototype.checkCollisions = function() {
}

Game.prototype.gameOver = function() {
    if (this.lives === 0) this.lose = true;
    else this.lose = false;
}

module.exports = Game;