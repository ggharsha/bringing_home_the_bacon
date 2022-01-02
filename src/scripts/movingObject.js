// function MovingObject(object) {
//     this.pos = object["pos"];
//     this.vel = object["vel"];
//     this.game = object["game"];
//     this.size = object["size"];
// }

// MovingObject.prototype.draw = function(ctx) {
// }

// // traffic cones and road stripes will move at same rate
// // pans and knives will move faster
// // pig will always have 0 x, jumping will alter the y
// MovingObject.prototype.move = function() {
//     this.pos[0] = this.pos[0] + this.vel[0];
//     this.pos[1] = this.pos[1] + this.vel[1];
// }

// MovingObject.prototype.isCollidedWith = function(otherObject) {
//     let thisX = this.pos[0];
//     let thisY = this.pos[1];
//     let otherX = otherObject.pos[0];
//     let otherY = otherObject.pos[1];
//     // check collision and return true or false;
// }    

export default class MovingObject {
    constructor(object) {
        this.pos = object["pos"];
        this.vel = object["vel"];
        this.game = object["game"];
        this.size = object["size"];
    }

    draw(ctx) {
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