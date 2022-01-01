const MovingObject = require("./movingObject");
const Util = require("./util");

function TrafficCone(object) {
    this.pos = [1000, 250];
    this.vel = [-25, 0];
    this.game = object["game"];
    this.size = object["size"]; // refactor this
}

Util.inherits(TrafficCone, MovingObject);

TrafficCone.prototype.draw = function(ctx) {
    const trafficcone = new Image();
    trafficcone.addEventListener('load', () => ctx.drawImage(trafficcone, this.pos[0], this.pos[1]));
    trafficcone.src = "src/images/trafficcone.png";
}

module.exports = TrafficCone;