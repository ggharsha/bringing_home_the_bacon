const Game = require("./game")

function GameView(ctx) {
    this.game = new Game(ctx);
    this.ctx = ctx;
}

GameView.prototype.start = function() {
    // this.game.start()
    // setInterval(() => {this.game.draw(this.ctx)}, 25)
    // setInterval(() => {this.game.step()}, 25)
}

module.exports = GameView;