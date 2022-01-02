import MovingObject from "./movingObject";

export default class Knife extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-100, 0];
    }

    draw(ctx) {
        const knife = new Image();
        knife.addEventListener('load', () => ctx.drawImage(knife, this.pos[0], this.pos[1]));
        knife.src = "src/images/knife.png";
    }
}