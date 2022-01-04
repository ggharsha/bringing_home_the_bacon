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
        ctx.fillText(`Lives:${this.lives}`, 870, 40)
        ctx.fillText(`Lv.${this.level}`, 925, 85);
    }

    moveObjects() {
        const pig = this.pig
        window.addEventListener("keydown", function(e) {
            if (e.code === "Space" || e.code === "ArrowUp") pig.jump()
        });
        window.addEventListener("keydown", function(e) {
            if (e.code === "ArrowDown") pig.duck();
        });
        window.addEventListener("keyup", function(e) {
            if (e.code === "ArrowDown") pig.stand();
        });
        pig.switchSprite();
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
        if (flag && this.lives > 1) {
            this.lives--;
            this.restartLevel();
        } else if (flag) {
            this.lives--;
            this.gameOver();
        };
    }

    restartLevel() {
        this.objects = [this.pig];
        if (this.level === 1) this.levelOne();
        else if (this.level === 2) this.levelTwo();
        else if (this.level === 3) this.levelThree();
        else if (this.level === 4) this.levelFour();
        else if (this.level === 5) this.levelFive();
    }

    gameOver() {
        this.objects = [this.pig];
        this.pig.sprite = "src/images/newDeadPig.png";
    }

    levelOne() { 
        let bg = new Background({ game: this, pos: [0, 0]});
        let bg2 = new Background({ game: this, pos: [1000, 0] });
        let tc = new TrafficCone({ game: this, pos: [1100, 350] });
        let tc2 = new TrafficCone({ game: this, pos: [3000, 350] });
        let knife = new Knife({ game: this, pos: [3000, 240] });
        let pan = new Pan({ game: this, pos: [3000, 0], vel: [-70, 10] });
        let apple = new Apple({ game: this, pos: [3500, 350] });
        this.objects.push(bg, bg2, tc, tc2, knife, pan, apple); 
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