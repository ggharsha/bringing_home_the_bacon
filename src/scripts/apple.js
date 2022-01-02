import MovingObject from "./movingObject";

export default class Apple extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-50, 0];
    }

    draw(ctx) {
        const apple = new Image();
        apple.addEventListener('load', () => ctx.drawImage(apple, this.pos[0], this.pos[1]));
        apple.src = "src/images/apple.png";
    }
}