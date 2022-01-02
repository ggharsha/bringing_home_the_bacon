import Pig from "./pig";
import TrafficCone from "./trafficCone";
import Knife from "./knife";
import Pan from "./pan";
import Background from "./background";
import Apple from "./apple";

export default class Game {
    constructor(ctx) {
        this.DIM_X = 1000;
        this.DIM_Y = 600;
        this.lives = 3;
        this.level = 1;
        this.pig = new Pig({ game: this });
        this.objects = [this.pig];
    }

    // lets replace draw and step with an animate method
    animate(ctx) {
        ctx.clearRect(0, 0, 1000, 600);
        this.draw(ctx);
        requestAnimationFrame(animate);
    }

    // refactoring this
    draw(ctx) {
        ctx.clearRect(0, 0, 1000, 600);
        this.objects.forEach(obj => {
            obj.draw(ctx);
        }); 
    }

    // refactoring this
    moveObjects() {
        const pig = this.pig
        pig.switchSprite();
        window.addEventListener("keydown", function(e) {
            if (e.code === "Space" || e.code === "ArrowUp") pig.jump()
        });
        window.addEventListener("keydown", function(e) {
            if (e.code === "ArrowDown") pig.duck();
        });
        window.addEventListener("keyup", function(e) {
            if (e.code === "ArrowDown") pig.stand();
        });
        this.objects.forEach(obj => obj.move());
        if (this.pig.pos[1] < 80) this.pig.vel = [0, 40];
        if (this.pig.pos[1] === 250) this.pig.vel = [0, 0];
    }

    checkCollisions() {
    }

    step() {
        this.moveObjects();
        // this.checkCollisions();
    }

    levelOne() {
        let bg = new Background({ game: this, pos: [0, 0]} );
        let bg2 = new Background({ game: this, pos: [1000, 0]} );
        let tc = new TrafficCone({ game: this, pos: [1100, 250] });
        let tc2 = new TrafficCone({ game: this, pos: [2400, 250] });
        let knife = new Knife({ game: this, pos: [3000, 180] });
        let knife2 = new Knife({ game: this, pos: [4000, 180] });
        let pan = new Pan({ game: this, pos: [3500, 180] });
        let apple = new Apple({ game: this, pos: [3500, 300] });
        this.objects.push(bg, bg2, tc, tc2, knife, knife2, pan, apple); // add bg, bg2, 
    }

    levelTwo() {
        // let bg = new Background({ game: this, pos: [0, 0]} );
        // let bg2 = new Background({ game: this, pos: [1000, 0]} );
    }

    levelThree() {
        // let bg = new Background({ game: this, pos: [0, 0]} );
        // let bg2 = new Background({ game: this, pos: [1000, 0]} );
    }

    levelFour() {
        // let bg = new Background({ game: this, pos: [0, 0]} );
        // let bg2 = new Background({ game: this, pos: [1000, 0]} );
    }

    levelFive() {
        // let bg = new Background({ game: this, pos: [0, 0]} );
        // let bg2 = new Background({ game: this, pos: [1000, 0]} );
    }
}