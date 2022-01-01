const MovingObject = require("./movingObject");
const Util = require("./util");

function Apple(object) {
    this.pos = [1000, 170];
    this.vel = [-25, 0];
    this.game = object["game"];
    this.size = object["size"];
}

Util.inherits(Apple, MovingObject);

Apple.prototype.draw = function (ctx) {
    const apple = new Image();
    apple.addEventListener('load', () => ctx.drawImage(apple, this.pos[0], this.pos[1]));
    apple.src = "src/images/apple.png";
}

module.exports = Apple;