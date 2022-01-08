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
        // old background
        // // empty space
        // ctx.fillStyle = '#a9a9a9'
        // ctx.fillRect(this.pos[0], 600, 1000, 401); // bottom canvas
        // ctx.fillRect(this.pos[0], 0, 1000, 139); // top canvas

        // // road
        // ctx.fillStyle = '#838383';
        // ctx.fillRect(this.pos[0], 400, 1000, 140);

        // // road lines
        // ctx.fillStyle = 'yellow';
        // for (let counter = 0; counter < 11; counter++) {
        //     ctx.fillRect((100 * counter + this.pos[0]), 460, 50, 10);
        // }; 

        // new background image
        ctx.drawImage(this.img, this.pos[0], this.pos[1]);
    }

    wrap() {
        if (this.pos[0] === -1000) this.pos[0] = 1000;
    }
}