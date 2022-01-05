import MovingObject from "./movingObject";

export default class Background extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-50, 0];
    }

    draw(ctx) {
        ctx.fillStyle = '#a9a9a9'
        ctx.fillRect(this.pos[0], 600, 1000, 401); // bottom
        ctx.fillRect(this.pos[0], 0, 1000, 139); // top
        ctx.fillStyle = '#838383';
        ctx.fillRect(this.pos[0], 400, 1000, 140);
        ctx.fillStyle = 'yellow';
        for (let counter = 0; counter < 11; counter++) {
            ctx.fillRect((100 * counter + this.pos[0]), 460, 50, 10);
        };
    }

    wrap() {
        if (this.pos[0] === -1000) this.pos[0] = 1000;
    }
}