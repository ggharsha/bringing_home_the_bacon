const Pig = require("./pig")

class Game {

    constructor(ctx) {
        DIM_X = 1000;
        DIM_Y = 600;
        this.stage = 1;
        this.level = 1;
        // this.pig = new Pig({game: this})
    }

}

module.exports = Game;