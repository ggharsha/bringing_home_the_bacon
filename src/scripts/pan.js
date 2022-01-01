const MovingObject = require("./movingObject");
const Util = require("./util");

function Pan(object) {
    this.pos = [1000, 170];
    this.vel = [-50, 0];
    this.game = object["game"];
    this.size = object["size"];
}

Util.inherits(Pan, MovingObject);

Pan.prototype.draw = function (ctx) {
    const pan = new Image();
    pan.addEventListener('load', () => ctx.drawImage(pan, this.pos[0], this.pos[1]));
    pan.src = "src/images/pan.png";
}

module.exports = Pan;