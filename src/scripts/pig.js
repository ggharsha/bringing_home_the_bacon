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
    // replace later
    const pig = document.getElementById('pig');
    ctx.drawImage(pig, 0, 250);
}

Pig.prototype.isJumping = function() {
    if (this.pos[1] !== 250) return true;
    return false;
}

Pig.prototype.isDucking = function() {

}

module.exports = Pig;