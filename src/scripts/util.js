const Util = {
    inherits(childClass, parentClass) {
        function Banana() { };
        Banana.prototype = parentClass.prototype;
        childClass.prototype = new Banana;
        childClass.prototype.constructor = childClass;
    },
};

module.exports = Util;