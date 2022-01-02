import MovingObject from "./movingObject";

export default class Pig extends MovingObject {
    constructor(object) {
        super(object);
        this.pos = [0, 250];
        this.vel = [0, 0];
        this.size = [164, 124];
        this.sprite = "src/images/pig1.png";
        this.counter = 3;
    }

    draw(ctx) {
        const pig = new Image();
        pig.addEventListener('load', () => ctx.drawImage(pig, this.pos[0], this.pos[1]));
        pig.src = this.sprite;
    }
    
    switchSprite() {
        if (this.counter === 0) {
            if (this.sprite === "src/images/pig1.png") this.sprite = "src/images/pig2.png";
            else this.sprite = "src/images/pig1.png";
            this.counter = 3;
        } else this.counter--;
    }
    
    // need to finish
    isCollidedWith(otherObject) {
        let thisX = this.pos[0];
        let thisY = this.pos[1];
        let otherX = otherObject.pos[0];
        let otherY = otherObject.pos[1];
        //check collision, return t or f
    }

    jump() {
        if (this.pos[1] === 250) this.vel = [0, -40];
    }

    duck() {
        console.log("hello")
        if (this.pos[1] === 250) {
            this.sprite = "./src/images/duckingpig.png";
            this.size = [/* new size */];
        };
    }

    stand() {
        if (this.pos[1] === 250) {
            this.sprite = "./src/images/pig1.png";
            this.size = [/* new size */];
        };
    }

    // add a dead function
}