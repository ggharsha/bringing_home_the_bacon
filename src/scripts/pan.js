import MovingObject from "./movingObject";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export default class Pan extends MovingObject {
    constructor(object) {
        super(object);
        this.size = [160, 88];
        this.img = new Image();
        this.img.src = "src/images/newPan.png";
        this.img.onload = () => this.draw(ctx);
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.pos[0], this.pos[1]);
    }
}