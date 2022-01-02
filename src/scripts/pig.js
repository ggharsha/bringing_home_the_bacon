import MovingObject from "./movingObject";

export default class Pig extends MovingObject {
    constructor(object) {
        super(object);
        this.pos = [0, 250];
        this.vel = [0, 0];
        this.size = [164, 124];
        this.sprite = "src/images/pig1.png";
    }

    draw(ctx) {
        const pig = new Image();
        pig.addEventListener('load', () => ctx.drawImage(pig, this.pos[0], this.pos[1]));
        pig.src = this.sprite;
    }
    
    // add dead sprite 
    switchSprite() {
        if (this.isDucking()) this.sprite = "src/images/duckingpig.png";
        if (this.sprite === "src/images/pig1.png") this.sprite = "src/images/pig2.png";
        else this.sprite = "src/images/pig1.png";
    }
    
    // need to finish
    isCollidedWith(otherObject) {
        let thisX = this.pos[0];
        let thisY = this.pos[1];
        let otherX = otherObject.pos[0];
        let otherY = otherObject.pos[1];
        //check collision, return t or f
    }

    // call all methods here
    update() {
    }

    // working on this
    jump() {
        console.log("1");
        if (this.pos[1] === 250) {
            this.vel = [0, -40]
        } 
        // set max height
        // set base vel
    }

    isJumping() {
        if (this.pos[1] !== 250) return true;
        return false;
    }

    isDucking() {
    }
}