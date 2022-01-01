function MovingObject(object) {
    this.pos = object["pos"];
    this.vel = object["vel"];
    this.game = object["game"];
    this.size = object["size"];
}

MovingObject.prototype.draw = function(ctx) {
}

MovingObject.prototype.move = function() {
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];
    this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    let thisX = this.pos[0];
    let thisY = this.pos[1];
    let otherX = otherObject.pos[0];
    let otherY = otherObject.pos[1];
    // check collision and return true or false;
}    

// traffic cones and road stripes will move at same rate
// pans and knives will move faster


