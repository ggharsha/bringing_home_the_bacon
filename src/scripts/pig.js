const MovingObject = require("./movingObject");
const Util = require("./util");

function Pig(object) {
    this.pos = object["pos"];
    this.vel = object["vel"];
    this.game = object["game"];
    this.size = object["size"];
}

Util.inherits(Pig, MovingObject);

Pig.prototype.draw = function(ctx) {
}

module.exports = Pig;