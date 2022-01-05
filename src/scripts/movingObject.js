export default class MovingObject {
    constructor(object) {
        this.pos = object["pos"];
        this.vel = object["vel"];
        this.game = object["game"];
        this.size = object["size"];
    }

    draw(ctx) {}

    move() {
        this.pos[0] = this.pos[0] + this.vel[0];
        this.pos[1] = this.pos[1] + this.vel[1];
    }
}