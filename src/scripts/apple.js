import MovingObject from "./movingObject";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export default class Apple extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-50, 0];
        this.sprite = "src/images/newApple.png";
        
        this.img1 = new Image();
        this.img1.src = "src/images/newApple.png";
        this.img1.onload = () => this.draw(ctx);

        this.img2 = new Image();
        this.img2.src = "src/images/newApple2.png";
        this.img2.onload = () => this.draw(ctx);

        this.img3 = new Image();
        this.img3.src = "src/images/newApple3.png";
        this.img3.onload = () => this.draw(ctx);

        this.state = 1;
    }

    draw(ctx) {
        if (this.state === 1) ctx.drawImage(this.img1, this.pos[0], this.pos[1]);
        else if (this.state === 2) ctx.drawImage(this.img2, this.pos[0], this.pos[1]);
        else if (this.state === 3) ctx.drawImage(this.img3, this.pos[0], this.pos[1]);
    }
}