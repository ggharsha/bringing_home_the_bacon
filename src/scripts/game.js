import Pig from "./pig";
import TrafficCone from "./trafficCone";
import Knife from "./knife";
import Pan from "./pan";
import Background from "./background";
import Apple from "./apple";
import Goal from "./goal";

let fpsInterval, then, now, elapsed;
const canvas = document.getElementById('canvas');

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
        this.games = [];
    }

    startAnimating(fps) { // determine fps for game
        fpsInterval = 1000 / fps;
        then = Date.now();
        this.animate();
    }

    animate() { // animation loop
        requestAnimationFrame(this.animate.bind(this))
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            this.draw(this.ctx);
            this.step();
        };
    }

    draw(ctx) { // clear canvas -> draw all objects -> check for gameOver or win
        ctx.clearRect(0, 0, 1000, 600);
        this.objects.forEach(obj => {
            if (!(obj instanceof Pig)) obj.draw(ctx);
        });
        this.pig.draw(ctx)
        ctx.fillStyle = 'white';
        ctx.font = '40px Shizuru';
        ctx.fillText(`Lives:${this.lives}`, 870, 40)
        ctx.fillText(`Lv.${this.level}`, 910, 85);
        if (this.lives === 0) this.gameOverScreen();
        if (this.level === '!') this.winMessage();
    }

    moveObjects() { // check for movement -> move objects -> wrap background -> handle gravity for pig jump 
        const pig = this.pig
        let game = this;
        window.addEventListener("keydown", function (e) {
            if ((e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") && game.lives > 0 && !pig.ducking) pig.jump()
        });
        window.addEventListener("keydown", function (e) {
            if ((e.code === "ArrowDown" || e.code === "KeyS") && game.lives > 0) pig.duck();
        });
        window.addEventListener("keyup", function (e) {
            if ((e.code === "ArrowDown" || e.code === "KeyS") && game.lives > 0) pig.stand();
        });
        this.objects.forEach(obj => {
            obj.move();
            if (obj instanceof Background) obj.wrap();
        });
        if (this.pig.pos[1] < 120) this.pig.vel = [0, 35];
        if (this.pig.pos[1] >= 320) {
            this.pig.vel = [0, 0];
            this.pig.pos = [40, 320];
        };
    }

    step() { // move -> check for collision -> check if win
        this.moveObjects();
        this.checkCollisions();
        this.checkGoal();
        this.checkApple();
    }

    checkCollisions() { // check for collision with pan/knife/cone -> call restartLevel or gameOver
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

    checkApple() { // apple animations for end of level
        let apple;
        this.objects.forEach(obj => {
            if (obj instanceof Apple) apple = obj;
        });
        if (this.goal && (this.pig.pos[0] >= this.goal.pos[0])) {
            apple.state = null;
        } else if (this.goal && (this.pig.pos[0] + (this.pig.size[0] / 2) >= this.goal.pos[0])) {
            apple.state = 3;
        } else if (this.goal && (this.pig.pos[0] + this.pig.size[0] >= this.goal.pos[0])) {
            apple.state = 2;
        };
    }

    checkGoal() { // check if player reaches goal
        if (this.goal && (this.pig.pos[0] >= this.goal.pos[0])) {
            this.nextLevel();
        };
    }

    restartLevel() { // check current level and reload objects and pig
        this.pig = new Pig({ game: this });
        this.objects = [this.pig];
        if (this.level === 1) {
            this.redFlash();
            this.levelOne();
        } else if (this.level === 2) {
            this.redFlash();
            this.levelTwo();
        } else if (this.level === 3) {
            this.redFlash();
            this.levelThree();
        } else if (this.level === 4) {
            this.redFlash();
            this.levelFour();
        } else if (this.level === 5) {
            this.redFlash();
            this.levelFive();
        }
    }

    redFlash() { // flash red on screen when colliding with obj
        this.ctx.fillStyle = '#ff6c57';
        this.ctx.fillRect(0, 0, 1000, 600);
    }

    gameOver() { // replace sprite with dead pig, remove other objects
        this.objects = [this.pig];
        this.pig.dead = true;
        this.gameOverScreen();
    }

    gameOverScreen() { // gameOver screen -> reset values for new game and add play again feature
        this.games = [];
        this.ctx.fillStyle = 'white';
        this.ctx.font = '50px Shizuru';
        this.ctx.fillText('Game over!', 380, 270);
        this.ctx.font = '24px Shizuru';
        this.ctx.fillText('Play again?', 450, 400);
        canvas.addEventListener('click', () => {
            if (this.games.length === 0) {
                this.games.push("check");
                this.pig.dead = false;
                this.pig.ducking = false;
                this.pig.stand2 = false;
                this.pig.stand1 = true;
                this.levelOne();
                this.lives = 3;
                this.level = 1;
                this.startAnimating(10)
            };
        });
    }

    levelOne() {  // level 1 objects
        let bg = new Background({ game: this, pos: [0, 0] });
        let bg2 = new Background({ game: this, pos: [1000, 0] });
        let tc = new TrafficCone({ game: this, pos: [1100, 350] });
        let tc2 = new TrafficCone({ game: this, pos: [3000, 350] });
        let knife = new Knife({ game: this, pos: [3000, 240] });
        let pan = new Pan({ game: this, pos: [3000, 0], vel: [-70, 10] });
        let apple = new Apple({ game: this, pos: [3500, 350] });
        let goal = new Goal({ game: this, pos: [3500, 0] });
        this.goal = goal;
        this.objects.push(bg, bg2, tc, tc2, knife, pan, goal, apple);
    }

    levelTwo() { // level 2 objects
        let bg = new Background({ game: this, pos: [0, 0] });
        let bg2 = new Background({ game: this, pos: [1000, 0] });
        let knife = new Knife({ game: this, pos: [1000, 300] });
        let knife2 = new Knife({ game: this, pos: [2200, 320] });
        let pan = new Pan({ game: this, pos: [2200, 350], vel: [-100, 0] });
        let tc = new TrafficCone({ game: this, pos: [2000, 350] });
        let knife3 = new Knife({ game: this, pos: [5000, 50] });
        let knife4 = new Knife({ game: this, pos: [5000, 100] });
        let knife5 = new Knife({ game: this, pos: [5000, 150] });
        let knife6 = new Knife({ game: this, pos: [5000, 200] });
        let knife7 = new Knife({ game: this, pos: [5000, 250] });
        let apple = new Apple({ game: this, pos: [3500, 350] });
        let goal = new Goal({ game: this, pos: [3500, 0] });
        this.goal = goal;
        this.objects.push(bg, bg2, knife, knife2, pan, tc, knife3, knife4, knife5, knife6, knife7, goal, apple);
    }

    levelThree() { // level 3 objects
        let bg = new Background({ game: this, pos: [0, 0] });
        let bg2 = new Background({ game: this, pos: [1000, 0] });
        let pan = new Pan({ game: this, pos: [850, 600], vel: [-100, -50] });
        let pan2 = new Pan({ game: this, pos: [1050, 0], vel: [-100, 50] });
        let tc = new TrafficCone({ game: this, pos: [1050, 350] });
        let knife = new Knife({ game: this, pos: [2600, 200] });
        let tc2 = new TrafficCone({ game: this, pos: [1800, 350] });
        let knife2 = new Knife({ game: this, pos: [4400, 200] });
        let tc3 = new TrafficCone({ game: this, pos: [2600, 350] });
        let pan3 = new Pan({ game: this, pos: [6500, 0], vel: [-100, 8] });
        let apple = new Apple({ game: this, pos: [3500, 350] });
        let goal = new Goal({ game: this, pos: [3500, 0] });
        this.goal = goal;
        this.objects.push(bg, bg2, pan, pan2, tc, knife, tc2, knife2, tc3, pan3, goal, apple);
    }

    levelFour() { // level 4 objects
        let bg = new Background({ game: this, pos: [0, 0] });
        let bg2 = new Background({ game: this, pos: [1000, 0] });
        let knife = new Knife({ game: this, pos: [1100, 350] });
        let knife2 = new Knife({ game: this, pos: [1100, 40] });
        let knife3 = new Knife({ game: this, pos: [2500, 350] });
        let knife4 = new Knife({ game: this, pos: [2500, 40] });
        let pan = new Pan({ game: this, pos: [1800, 100], vel: [-100, 0] });
        let tc = new TrafficCone({ game: this, pos: [2200, 350] });
        let pan2 = new Pan({ game: this, pos: [4000, 200], vel: [-95, 5] });
        let knife5 = new Knife({ game: this, pos: [5500, 260] });
        let apple = new Apple({ game: this, pos: [3500, 350] });
        let goal = new Goal({ game: this, pos: [3500, 0] });
        this.goal = goal;
        this.objects.push(bg, bg2, knife, knife2, knife3, knife4, pan, tc, pan2, knife5, goal, apple);
    }

    levelFive() { // level 5 objects
        let bg = new Background({ game: this, pos: [0, 0] });
        let bg2 = new Background({ game: this, pos: [1000, 0] });
        let knife = new Knife({ game: this, pos: [2800, 280] });
        let pan = new Pan({ game: this, pos: [1000, 0], vel: [-100, 60] });
        let tc = new TrafficCone({ game: this, pos: [1000, 350] });
        let tc2 = new TrafficCone({ game: this, pos: [1900, 350] });
        let knife2 = new Knife({ game: this, pos: [4600, 280] });
        let knife3 = new Knife({ game: this, pos: [5600, 350] });
        let knife4 = new Knife({ game: this, pos: [5600, 400] });
        let knife5 = new Knife({ game: this, pos: [5600, 450] });
        let knife6 = new Knife({ game: this, pos: [5600, 500] });
        let knife7 = new Knife({ game: this, pos: [5600, 550] });
        let tc3 = new TrafficCone({ game: this, pos: [2900, 350] });
        let tc4 = new TrafficCone({ game: this, pos: [3800, 350] });
        let pan2 = new Pan({ game: this, pos: [6500, 50], vel: [-100, 0] });
        let pan3 = new Pan({ game: this, pos: [6500, 100], vel: [-100, 0] });
        let pan4 = new Pan({ game: this, pos: [6500, 150], vel: [-100, 0] });
        let pan5 = new Pan({ game: this, pos: [6500, 200], vel: [-100, 0] });
        let apple = new Apple({ game: this, pos: [4000, 350] });
        let goal = new Goal({ game: this, pos: [4000, 0] });
        this.goal = goal;
        this.objects.push(bg, bg2, knife, pan, tc, tc2, knife2, knife3, knife4, knife5, knife6, knife7, tc3, tc4, pan2, pan3, pan4, pan5, goal, apple);
    }

    nextLevel() { // level progression 
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
            this.level = `!`
            this.objects = [this.pig];
            this.goal = null;
            this.winMessage();
        };
    }

    winMessage() { // win screen -> play again?
        this.games = [];
        this.ctx.fillStyle = 'white';
        this.ctx.font = '50px Shizuru';
        this.ctx.fillText('You brought home the bacon!', 120, 270);
        this.ctx.font = '24px Shizuru';
        this.ctx.fillText('Play again?', 450, 400);
        canvas.addEventListener('click', () => {
            if (this.games.length === 0) {
                this.games.push("check");
                this.pig.ducking = false;
                this.pig.stand2 = false;
                this.pig.stand1 = true;
                this.lives = 3;
                this.level = 1;
                this.levelOne();
                this.startAnimating(10)
            };
        });
    }
}