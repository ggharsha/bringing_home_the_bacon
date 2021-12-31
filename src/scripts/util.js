const Util = {

    inherits(child, parent) {
        function Banana() {};
        Banana.prototype = parent.prototype;
        child.prototype = new Banana();
        child.prototype.constructor = child;
    }

}

module.exports = Util;

// might want to refactor this for ES6