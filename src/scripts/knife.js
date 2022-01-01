const MovingObject = require("./movingObject");
const Util = require("./util");

function Knife(object) {
    this.pos = [1000, 340];
    this.vel = [-50, 0];
    this.game = object["game"];
    this.size = object["size"];
}

Util.inherits(Knife, MovingObject);

Knife.prototype.draw = function(ctx) {
}

module.exports = Knife;