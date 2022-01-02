import Game from "./game";

export default class GameView {
    constructor(ctx) {
        this.game = x // new Game(ctx);
        this.ctx = ctx;
    }

    start() {
        // setInterval(() => {this.game.draw(this.ctx)}, 25)
        // setInterval(() => {this.game.step()}, 25)
    }

    bindKeyHandlers() {
        // keyhandlers
    }
}