const MovingObject = require("./movingObject");
const Util = require("./util");

function TrafficCone(object) {
    this.pos = [1000, 250];
    this.vel = [-25, 0];
    this.game = object["game"];
    this.size = object["size"];
}

Util.inherits(TrafficCone, MovingObject);

TrafficCone.prototype.draw = function(ctx) {
    const trafficcone = new Image();
    trafficcone.addEventListener('load', () => ctx.drawImage(trafficcone, 800, 250));
    trafficcone.src = "src/images/trafficcone.png";
}

module.exports = TrafficCone;