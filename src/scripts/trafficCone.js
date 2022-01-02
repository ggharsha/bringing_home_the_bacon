import MovingObject from "./movingObject";

export default class TrafficCone extends MovingObject {

    constructor(object) {
        super(object);
        this.vel = [-25, 0];
    }

    draw(ctx) {
        const trafficcone = new Image();
        trafficcone.addEventListener('load', () => ctx.drawImage(trafficcone, this.pos[0], this.pos[1]));
        trafficcone.src = "src/images/trafficcone.png";
    }

}