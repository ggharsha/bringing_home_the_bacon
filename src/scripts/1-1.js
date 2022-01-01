const Apple = require("./apple");
const Background = require("./background");
const Knife = require("./knife");
const Pig = require("./pig");
const TrafficCone = require("./trafficCone");

function Level1(game) {
    this.background1 = new Background({game: game});
    this.background2 = new Background({game: game});
    this.pig = new Pig({game: game});
    this.cone1 = new TrafficCone({game: game});
    this.cone2 = new TrafficCone({game: game});
    this.knife1 = new Knife({game: game});
    this.apple = new Apple({game: game})
}

Level1.prototype.start = function() {
    // load background
    // load pig
    // load objects using setinterval
    // load apple
}

module.exports = Level1;