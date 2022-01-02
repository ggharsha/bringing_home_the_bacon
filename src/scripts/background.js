import MovingObject from "./movingObject";

export default class Background extends MovingObject {

    constructor(object) {
        super(object);
        this.vel = [-25, 0];
    }

    draw() {
        // create road
        this.ctx.fillStyle = '#838383';
        this.ctx.fillRect(0, 400, 1000, 140)

        // create lines on road
        this.ctx.fillStyle = 'yellow';
        // state 1
        for (let counter = 0; counter < 11; counter++) ctx.fillRect((100 * counter), 460, 50, 10);
        // state 2
        // for (let counter = 0; counter < 11; counter++) ctx.fillRect((100 * counter - 25), 460, 50, 10);
        // state 3
        // for (let counter = 0; counter < 11; counter++) ctx.fillRect((100 * counter - 50), 460, 50, 10);
        // state 4
        // for (let counter = 0; counter < 11; counter++) ctx.fillRect((100 * counter - 75), 460, 50, 10);
    }
}