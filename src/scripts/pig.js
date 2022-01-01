const MovingObject = require("./movingObject");
const Util = require("./util");

function Pig(object) {
    this.pos = [0, 250];
    this.vel = [0, 0];
    this.game = object["game"];
    this.size = object["size"];
    this.sprite = "src/images/pig1.png";
}

Util.inherits(Pig, MovingObject);

Pig.prototype.draw = function(ctx) {
    const pig = new Image();
    pig.addEventListener('load', () => ctx.drawImage(pig, this.pos[0], this.pos[1]));
    pig.src = "src/images/pig1.png"
}

Pig.prototype.switchSprite = function() {
    if (this.sprite === "src/images/pig1.png") this.sprite = "src/images/pig2.png";
    else this.sprite = "src/images/pig1.png";
}

Pig.prototype.isJumping = function() {
    if (this.pos[1] !== 250) return true;
    return false;
}

Pig.prototype.isDucking = function() {

}

module.exports = Pig;