import MovingObject from "./movingObject";

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

export default class Pig extends MovingObject {
    constructor(object) {
        super(object);
        this.pos = [40, 320];
        this.vel = [0, 0];
        this.size = [192, 128]; 
        this.sprite = "src/images/newPig1.png";
        this.counter = 3;
    }

    draw(ctx) {
        const pig = new Image();
        pig.addEventListener('load', () => ctx.drawImage(pig, this.pos[0], this.pos[1]));
        pig.src = this.sprite
    }
    
    switchSprite() {
        if (this.counter === 0) {
            if (this.sprite === "src/images/newPig1.png") this.sprite = "src/images/newPig2.png";
            else this.sprite = "src/images/newPig1.png";
            this.counter = 3;
        } else this.counter--;
    }
    
    isCollidedWith(otherObject) {
        let pigLeft = this.pos[0];
        let pigRight = this.pos[0] + this.size[0];
        let pigTop = this.pos[1];
        let pigBottom = this.pos[1] + this.size[1];
        let otherLeft = otherObject.pos[0];
        let otherRight = otherObject.pos[0] + otherObject.size[0];
        let otherTop = otherObject.pos[1];
        let otherBottom = otherObject.pos[1] + otherObject.size[1];
        let collision = true;
        if ((pigBottom < otherTop) || (pigTop > otherBottom) || (pigRight < otherLeft) || (pigLeft > otherRight)) {
            collision = false;
        };
        console.log(collision);
        return collision;
    }

    jump() {
        if (this.pos[1] === 320) this.vel = [0, -30];
    }

    duck() {
        if (this.pos[1] === 320) {
            this.sprite = "src/images/newDuckingPig.png"
            this.size = [192, 98];
        };
    }

    stand() {
        if (this.pos[1] === 320) {
            this.sprite = "src/images/newPig1.png"
            this.size = [192, 128];
        };
    }

    // add a dead function
}