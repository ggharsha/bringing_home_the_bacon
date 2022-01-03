import Pig from "./pig";
import TrafficCone from "./trafficCone";
import Knife from "./knife";
import Pan from "./pan";
import Background from "./background";
import Apple from "./apple";

let fpsInterval, then, startTime, now, elapsed;

export default class Game {
    constructor(ctx) {
        this.DIM_X = 1000;
        this.DIM_Y = 600;
        this.lives = 3;
        this.level = 1;
        this.pig = new Pig({ game: this });
        this.objects = [this.pig];
        this.ctx = ctx;
        ctx.fillStyle = 'black';
        ctx.font = '40px Shizuru';
        ctx.fillText(`Lv.${this.level}`, 930, 40);
    }

    startAnimating(fps) {
        fpsInterval = 1000 / fps;
        then = Date.now();
        startTime = then;
        this.animate();
    }

    animate(){
        requestAnimationFrame(this.animate.bind(this))
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            this.draw(this.ctx);
            this.step();
        };
    }

    draw(ctx) {
        // trying cache method 
        // const tempCanvas = document.createElement('canvas');
        // const tempCtx = tempCanvas.getContext('2d');
        // tempCanvas.width = 1000;
        // tempCanvas.height = 600;
        // tempCanvas.drawImage()
        ctx.clearRect(0, 0, 1000, 600);
        this.objects.forEach(obj => {
            obj.draw(ctx);
        }); 
        ctx.fillStyle = 'black';
        ctx.font = '40px Shizuru';
        ctx.fillText(`Lv.${this.level}`, 930, 40);
    }

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
        this.objects.forEach(obj => { 
            obj.move();
        });
        if (this.pig.pos[1] < 120) this.pig.vel = [0, 40];
        if (this.pig.pos[1] >= 320) {
            this.pig.vel = [0, 0];
            this.pig.pos = [40, 320];
        };
    }
    
    step() {
        this.moveObjects();
        this.checkCollisions();
    }

    checkCollisions() {
        const obstacles = [];
        this.objects.forEach(obj => {
            if (obj instanceof Pan || obj instanceof Knife || obj instanceof TrafficCone) obstacles.push(obj);
        });
        let flag = false;
        obstacles.forEach(obs => {
            if (this.pig.isCollidedWith(obs)) flag = true;
        });
        console.log(flag)
        return flag;
    }

    restartLevel() {
    }

    gameOver() {
    }

    // add in default sizing in passed in object here
    levelOne() { 
        let bg = new Background({ game: this, pos: [0, 0]});
        let bg2 = new Background({ game: this, pos: [1000, 0] });
        let tc = new TrafficCone({ game: this, pos: [1100, 250] });
        let tc2 = new TrafficCone({ game: this, pos: [2400, 250] });
        let knife = new Knife({ game: this, pos: [3000, 180] });
        let knife2 = new Knife({ game: this, pos: [4000, 180] });
        let pan = new Pan({ game: this, pos: [3500, 150], vel: [-200, -40] });
        let apple = new Apple({ game: this, pos: [3500, 300] });
        this.objects.push(bg, bg2, tc, tc2, knife, knife2, pan, apple); 
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