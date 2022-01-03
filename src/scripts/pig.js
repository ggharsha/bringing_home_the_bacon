import MovingObject from "./movingObject";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export default class Pig extends MovingObject {
    constructor(object) {
        super(object);
        this.pos = [0, 250];
        this.vel = [0, 0];
        this.size = [164, 124];
        this.sprite = "src/images/pig1.png";
        this.counter = 3;
        // this.pigImg = new Image();
        // this.pigImg.addEventListener('load', () => ctx.drawImage(pigImg, this.pos[0], this.pos[1]));
        // this.pigImg.src = this.sprite;
    }

    draw(ctx) {
        const pig = new Image();
        pig.addEventListener('load', () => ctx.drawImage(pig, this.pos[0], this.pos[1]));
        pig.src = this.sprite;
        // ctx.drawImage(this.pigImg, this.pos[0], this.pos[1])
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
            this.size = [164, 100];
        };
    }

    stand() {
        if (this.pos[1] === 250) {
            this.sprite = "./src/images/pig1.png";
            this.size = [164, 124];
        };
    }

    // add a dead function
}