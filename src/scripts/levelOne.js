const Apple = require("./apple");
const Background = require("./background");
const Knife = require("./knife");
const Pig = require("./pig");
const TrafficCone = require("./trafficCone");

function Level1(game) {
    this.game = game;
    this.background1 = new Background({game: game});
    this.background2 = new Background({game: game});
    this.pig = new Pig({game: game});
    this.cone1 = new TrafficCone({game: game, pos: [7000 , 250]});
    this.cone2 = new TrafficCone({game: game, pos: [11000 , 250]});
    this.knife1 = new Knife({game: game, pos: [30000 , 170]});
    this.apple = new Apple({game: game, pos: [20000 , 170]})
}

Level1.prototype.allObjects = function() {
    return [this.background1, this.background2, this.pig, this.cone1, this.cone2, this.apple, this.knife1];
}

Level1.prototype.moveObjects = function() {
    this.allObjects().forEach(object => {
        object.move();
    });
}

Level1.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, 1000, 600);
    this.allObjects().forEach(object => {
        object.draw(ctx);
    });
}

module.exports = Level1;