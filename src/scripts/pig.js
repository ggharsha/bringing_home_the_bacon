import MovingObject from "./movingObject";
import TrafficCone from "./trafficCone";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

export default class Pig extends MovingObject {
    constructor(object) {
        super(object);
        this.pos = [40, 320];
        this.vel = [0, 0];
        this.size = [184, 128];

        this.imgStand1 = new Image();
        this.imgStand1.src = "src/images/newPig1.png";
        this.imgStand1.onload = () => this.draw(ctx);
        this.stand1 = true;

        this.imgStand2 = new Image();
        this.imgStand2.src = "src/images/newPig2.png";
        this.imgStand2.onload = () => this.draw(ctx);
        this.stand2 = false;

        this.imgDuck = new Image();
        this.imgDuck.src = "src/images/newDuckingPig.png";
        this.imgDuck.onload = () => this.draw(ctx);
        this.duckImg = false;

        this.imgDead = new Image();
        this.imgDead.src = "src/images/newDeadPig.png";
        this.imgDead.onload = () => this.draw(ctx);

        this.counter = 2;
        this.ducking = false;
        this.dead = false;
    }

    draw(ctx) {
        if (this.counter === 0 && !this.ducking) {
            if (this.stand1) {
                this.stand1 = false;
                this.stand2 = true;
                ctx.drawImage(this.imgStand2, this.pos[0], this.pos[1]);
            } else if (this.stand2) {
                this.stand2 = false;
                this.stand1 = true;
                ctx.drawImage(this.imgStand1, this.pos[0], this.pos[1]);
            }
            this.counter = 2;
        } else if (this.ducking) {
            ctx.drawImage(this.imgDuck, this.pos[0], this.pos[1]);
        } else if (this.dead) {
            ctx.drawImage(this.imgDead, this.pos[0], this.pos[1]);
        } else if (this.stand1 && this.counter !== 0) {
            ctx.drawImage(this.imgStand1, this.pos[0], this.pos[1]);
            this.counter--;
        } else if (this.stand2 && this.counter !== 0) {
            ctx.drawImage(this.imgStand2, this.pos[0], this.pos[1]);
            this.counter--;
        } else if (!this.dead) {
            ctx.drawImage(this.imgStand1, this.pos[0], this.pos[1])
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
        if (otherObject instanceof TrafficCone) {
            otherLeft = otherLeft + 10;
            otherRight = otherRight - 10;
        };
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
            this.size = [184, 98];
            this.ducking = true;
        };
    }

    stand() {
        if (this.pos[1] === 320) {
            this.size = [184, 128];
            this.ducking = false;
        };
    }
}