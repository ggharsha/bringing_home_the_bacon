import MovingObject from "./movingObject";

export default class Pan extends MovingObject {
    constructor(object) {
        super(object);
        this.size = [160, 88];

    }

    draw(ctx) {
        const pan = new Image();
        pan.addEventListener('load', () => ctx.drawImage(pan, this.pos[0], this.pos[1]));
        pan.src = "src/images/newPan.png";
    }
}