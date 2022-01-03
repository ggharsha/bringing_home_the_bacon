import Game from "./game";

export default class GameView {
    constructor(ctx) {
        this.game = new Game(ctx);
        this.ctx = ctx;
    }

    start() {

    }
}