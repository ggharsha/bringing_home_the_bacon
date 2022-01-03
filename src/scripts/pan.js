import MovingObject from "./movingObject";

export default class Pan extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-100, 0];
        this.size = [100, 70];
    }

    draw(ctx) {
        const pan = new Image();
        pan.addEventListener('load', () => ctx.drawImage(pan, this.pos[0], this.pos[1]));
        pan.src = "src/images/pan.png";
    }
}