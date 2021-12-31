const Pig = require("./pig")

class Game {

    constructor(ctx) {
        DIM_X = 1000;
        DIM_Y = 600;
        this.stage = 1;
        this.level = 1;
        this.lives = 3;
        // this.pig = new Pig({game: this})
    }

    //this method is only for the road stripes and buildings
    wrap(pos) {
        if (pos[0] < 0) pos[0] = DIM_X + pos[0];
        else pos[0] = pos[0] % DIM_X;
    }

    step() {

    }

    checkCollisions() {

    }

}

module.exports = Game;