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
        let pigX = this.pos[0];
        let pigY = this.pos[1];
        let obsX = otherObject.pos[0];
        let obsY = otherObject.pos[1];
        let pigLength = this.size[0] / 2;
        let pigHeight = this.size[1] / 2;
        let obsLength = otherObject.size[0] / 2;
        let obsHeight = otherObject.size[1] / 2;
        //check collision, return t or f
        // dist formula [x1, y1] vs [x2, y2]
        // square root of (x1 - x2)^2 + (y1 - y2)^2
        // check if combined distance to corners is less than ^
    }

    jump() {
        if (this.pos[1] === 250) this.vel = [0, -30];
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