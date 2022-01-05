import MovingObject from "./movingObject";

export default class Pig extends MovingObject {
    constructor(object) {
        super(object);
        this.pos = [40, 320];
        this.vel = [0, 0];
        this.size = [184, 128]; 
        this.sprite = "src/images/newPig1.png";
        this.counter = 2;
        this.ducking = false;
    }

    draw(ctx) {
        const pig = new Image();
        pig.addEventListener('load', () => ctx.drawImage(pig, this.pos[0], this.pos[1]));
        pig.src = this.sprite
    }
    
    switchSprite() {
        if (this.counter === 0 && !this.ducking) {
            if (this.sprite === "src/images/newPig1.png") {
                this.sprite = "src/images/newPig2.png";
            } else if (this.sprite === "src/images/newPig2.png") {
                this.sprite = "src/images/newPig1.png";
            };
            this.counter = 2;
        } else if (this.counter !== 0 && !this.ducking) {
            this.counter--;
        };
    }
    
    isCollidedWith(otherObject) {
        let pigLeft = this.pos[0];
        let pigRight = this.pos[0] + this.size[0];
        let pigBottom = this.pos[1] + this.size[1];
        let pigTop;
        if (this.ducking) pigTop = this.pos[1] + 30;
        else pigTop = this.pos[1];
        let otherLeft = otherObject.pos[0];
        let otherRight = otherObject.pos[0] + otherObject.size[0];
        let otherTop = otherObject.pos[1];
        let otherBottom = otherObject.pos[1] + otherObject.size[1];
        let collision = true;
        if ((pigBottom < otherTop) || (pigTop > otherBottom) || (pigRight < otherLeft) || (pigLeft > otherRight)) {
            collision = false;
        };
        return collision;
    }

    jump() {
        if (this.pos[1] === 320) this.vel = [0, -35];
    }

    duck() {
        if (this.pos[1] === 320) {
            this.sprite = "src/images/newDuckingPig.png"
            this.size = [184, 98];
            this.ducking = true;
        };
    }

    stand() {
        if (this.pos[1] === 320) {
            this.sprite = "src/images/newPig1.png"
            this.switchSprite();
            this.size = [184, 128];
            this.ducking = false;
        };
    }
}