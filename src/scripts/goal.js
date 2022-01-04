import MovingObject from "./movingObject";

export default class Goal extends MovingObject {
    constructor(object) {
        super(object);
        this.vel = [-50, 0];
        this.size = [1, 600];
    }
}