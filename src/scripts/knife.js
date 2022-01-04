import MovingObject from "./movingObject";

export default class Knife extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-100, 0];
        this.size = [160, 40];
    }

    draw(ctx) {
        const knife = new Image();
        knife.addEventListener('load', () => ctx.drawImage(knife, this.pos[0], this.pos[1]));
        knife.src = "src/images/newKnife.png";
    }
}