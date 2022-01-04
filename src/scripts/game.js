import Pig from "./pig";
import TrafficCone from "./trafficCone";
import Knife from "./knife";
import Pan from "./pan";
import Background from "./background";
import Apple from "./apple";
import Goal from "./goal";

let fpsInterval, then, now, elapsed;

export default class Game {
    constructor(ctx) {
        this.DIM_X = 1000;
        this.DIM_Y = 600;
        this.lives = 3;
        this.level = 1;
        this.pig = new Pig({ game: this });
        this.objects = [this.pig];
        this.ctx = ctx;
        this.goal = null;
    }

    startAnimating(fps) {
        fpsInterval = 1000 / fps;
        then = Date.now();
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
        this.objects.forEach(obj => { // consider refactor here
            obj.draw(ctx);
        }); 
        ctx.fillStyle = 'black';
        ctx.font = '40px Shizuru';
        ctx.fillText(`Lives:${this.lives}`, 870, 40)
        ctx.fillText(`Lv.${this.level}`, 910, 85);
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
        this.checkGoal();
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

    checkGoal() {
        if (this.goal && this.pig.pos[0] >= this.goal.pos[0]) this.nextLevel();
    }

    restartLevel() {
        this.objects = [this.pig];
        if (this.level === 1) this.levelOne();
        else if (this.level === 2) this.levelTwo();
        else if (this.level === 3) this.levelThree();
        else if (this.level === 4) this.levelFour();
        else if (this.level === 5) this.levelFive();
    }

    redFlash() {
        // add a red flash for hit detection
    }

    gameOver() {
        this.objects = [this.pig];
        this.pig.sprite = "src/images/newDeadPig.png";
        // this.gameOverScreen();
    }

    levelOne() { 
        let bg = new Background({ game: this, pos: [0, 0]});
        let bg2 = new Background({ game: this, pos: [1000, 0] });
        let tc = new TrafficCone({ game: this, pos: [1100, 350] });
        let tc2 = new TrafficCone({ game: this, pos: [3000, 350] });
        let knife = new Knife({ game: this, pos: [3000, 240] });
        let pan = new Pan({ game: this, pos: [3000, 0], vel: [-70, 10] });
        let apple = new Apple({ game: this, pos: [3500, 350] });
        let goal = new Goal({ game: this, pos: [3500, 0] });
        this.goal = goal;
        this.objects.push(bg, bg2, tc, tc2, knife, pan, apple, goal); 
    }

    levelTwo() {
        let knife = new Knife({ game: this, pos: [2000, 280] });
        this.objects.push(knife);
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

    nextLevel() {
        if (this.level === 1) {
            this.level++;
            this.objects = [this.pig];
            this.goal = null;
            this.levelTwo();
        } else if (this.level === 2) {
            this.level++;
            this.objects = [this.pig];
            this.goal = null;
            this.levelThree();
        } else if (this.level === 3) {
            this.level++;
            this.objects = [this.pig];
            this.goal = null;
            this.levelFour();
        } else if (this.level === 4) {
            this.level++;
            this.objects = [this.pig];
            this.goal = null;
            this.levelFive();
        } else if (this.level === 5) {
            this.objects = [this.pig];
            this.goal = null;
            this.winMessage();
        };
    }

    winMessage() {
    }
}