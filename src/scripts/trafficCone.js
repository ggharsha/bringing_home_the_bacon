import MovingObject from "./movingObject";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export default class TrafficCone extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-50, 0];
        this.size = [128, 128];
        this.img = new Image();
        this.img.src = "src/images/newTrafficCone.png";
        this.img.onload = () => this.draw(ctx);
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.pos[0], this.pos[1]);
    }
}