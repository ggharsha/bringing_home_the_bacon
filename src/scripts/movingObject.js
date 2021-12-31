class MovingObject {

    constructor(object) {
        this.pos = object["pos"];
        this.vel = object["vel"];
        this.game = object["game"];
        this.size = object["size"];
    }

    draw() {
    }

    // traffic cones and road stripes will move at same rate
    // pans and knives will move faster


}