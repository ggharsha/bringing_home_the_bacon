export default class MovingObject {
    constructor(object) {
        this.pos = object["pos"];
        this.vel = object["vel"];
        this.game = object["game"];
        this.size = object["size"];
    }

    move() {
        this.pos[0] = this.pos[0] + this.vel[0];
        this.pos[1] = this.pos[1] + this.vel[1];
    }

    isCollidedWith(otherObject) {
        let thisX = this.pos[0];
        let thisY = this.pos[1];
        let otherX = otherObject.pos[0];
        let otherY = otherObject.pos[1];
        //check collision, return t or f
    }
}