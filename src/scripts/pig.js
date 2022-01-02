import MovingObject from "./movingObject";

export default class Pig extends MovingObject {
    constructor(object) {
        super(object);
        this.pos = [0, 250]
        this.vel = [0, 0]
        this.sprite = "src/images/pig1.png";
        console.log(this.vel);
    }

    draw(ctx) {
        const pig = new Image();
        pig.addEventListener('load', () => ctx.drawImage(pig, this.pos[0], this.pos[1]));
        pig.src = "src/images/pig1.png"
    }

    switchSprite() {
        if (this.sprite === "src/images/pig1.png") this.sprite = "src/images/pig2.png";
        else this.sprite = "src/images/pig1.png";
    }

    isJumping() {
        if (this.pos[1] !== 250) return true;
        return false;
    }

    isDucking() {
    }
}