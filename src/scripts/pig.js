const MovingObject = require("./movingObject");
const Util = require("./util");

function Pig(object) {
    this.pos = [0, 250];
    this.vel = [0, 0];
    this.game = object["game"];
    this.size = object["size"];
}

Util.inherits(Pig, MovingObject);

Pig.prototype.draw = function(ctx) {
    const pig = new Image();
    pig.addEventListener('load', () => ctx.drawImage(pig, 0, 250, 256, 256));
    pig.src = "src/images/pig1.png"
}

Pig.prototype.isJumping = function() {
    if (this.pos[1] !== 250) return true;
    return false;
}

Pig.prototype.isDucking = function() {

}

module.exports = Pig;