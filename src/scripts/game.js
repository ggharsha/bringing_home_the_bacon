import Pig from "./pig";
import TrafficCone from "./trafficCone";
import Knife from "./knife";
import Pan from "./pan";
import Background from "./background";
import Apple from "./apple";

export default class Game {
    constructor(ctx) {
        DIM_X = 1000;
        DIM_Y = 600;
        this.objects = [];
        this.lives = 3;
        this.level = 1;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, DIM_X, DIM_Y);
        this.objects.forEach(obj => obj.draw(ctx)); 
    }

    moveObjects() {
        this.objects.forEach(obj => obj.move());
    }

    checkCollisions() {
    }

    step() {
        this.moveObjects();
        // this.checkCollisions();
    }

    levelOne() {
        // let bg = new Background({game: this, pos: [0, 0]});
        // let bg2 = new Background({game: this, pos: [1000, 0]});
        let pig = new Pig({game: this});
        let tc = new TrafficCone({game: this, pos: [7000, 250]});
        let tc2 = new TrafficCone({game: this, pos: [11000, 250]});
        let knife = new Knife({game: this, pos: [30000, 170]});
        let apple = new Apple({game: this, pos: [20000, 170]});
        this.objects = [pig, tc, tc2, knife, apple]; // add bg, bg2, 
    }

    levelTwo() {
        // let bg = new Background({game: this, pos: [0, 0]});
        // let bg2 = new Background({game: this, pos: [1000, 0]});
    }

    levelThree() {
        // let bg = new Background({game: this, pos: [0, 0]});
        // let bg2 = new Background({game: this, pos: [1000, 0]});
    }

    levelFour() {
        // let bg = new Background({game: this, pos: [0, 0]});
        // let bg2 = new Background({game: this, pos: [1000, 0]});
    }

    levelFive() {
        // let bg = new Background({game: this, pos: [0, 0]});
        // let bg2 = new Background({game: this, pos: [1000, 0]});
    }
}