import MovingObject from "./movingObject";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export default class Background extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-50, 0];
        this.img = new Image();
        this.img.src = "src/images/background2.png";
        this.img.onload = () => this.draw(ctx);
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.pos[0], this.pos[1]);
    }

    wrap() {
        if (this.pos[0] === -1000) this.pos[0] = 1000;
    }
}
