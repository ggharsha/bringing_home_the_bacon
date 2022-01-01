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
    // const pig = document.getElementById('pig');
    // ctx.drawImage(pig, 0, 250);
    // const pig = new Image(256, 256); // Using optional size for image
    // pig.onload = ctx.drawImage(pig, 0, 250); // Draw when image has loaded
    // pig.src = 'src/images/pig1.png';
}

Pig.prototype.isJumping = function() {
    if (this.pos[1] !== 250) return true;
    return false;
}

Pig.prototype.isDucking = function() {

}

module.exports = Pig;