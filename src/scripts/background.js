import MovingObject from "./movingObject";

export default class Background extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-50, 0];
    }

    // we will refactor this
    draw(ctx) {
        // create road
        ctx.fillStyle = '#838383';
        ctx.fillRect(0, 400, 1000, 140)

        // create lines on road
        ctx.fillStyle = 'yellow';
        for (let counter = 0; counter < 11; counter++) ctx.fillRect((100 * counter), 460, 50, 10);
    }

    wrap() {
        if (this.pos[0] === 0) this.pos[0] = 1000;
    }
}