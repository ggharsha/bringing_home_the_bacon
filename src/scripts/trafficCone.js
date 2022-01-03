import MovingObject from "./movingObject";

export default class TrafficCone extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-50, 0];
        this.size = [80, 124]
    }

    draw(ctx) {
        const trafficcone = new Image();
        trafficcone.addEventListener('load', () => ctx.drawImage(trafficcone, this.pos[0], this.pos[1]));
        trafficcone.src = "src/images/newTrafficCone.png";
    }
}