const Game = require("./game")

class GameView {

    constructor(ctx) {
        this.game = new Game(ctx);
        this.ctx = ctx;
    }

    // start() {
    //     setInterval(() => {this.game.draw(this.ctx)}, 25)
    //     setInterval(() => {this.game.step()}, 25)
    // }

}

module.exports = GameView;