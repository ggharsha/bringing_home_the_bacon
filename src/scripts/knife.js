const MovingObject = require("./movingObject");
const Util = require("./util");

function Knife(object) {
    this.pos = [1000, 170];
    this.vel = [-50, 0];
    this.game = object["game"];
    this.size = object["size"];
}

Util.inherits(Knife, MovingObject);

Knife.prototype.draw = function(ctx) {
    const knife = new Image();
    knife.addEventListener('load', () => ctx.drawImage(knife, this.pos[0], this.pos[1]));
    knife.src = "src/images/knife.png";
}

module.exports = Knife;