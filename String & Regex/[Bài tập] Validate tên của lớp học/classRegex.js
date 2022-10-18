"use strict";
exports.__esModule = true;
exports.ClassRegex = void 0;
var ClassRegex = /** @class */ (function () {
    function ClassRegex() {
        this.CLASS_REGEX = /^[CAP][0-9]{4}[GHIKLM]$/;
    }
    ClassRegex.prototype.validate = function (name) {
        return this.CLASS_REGEX.test(name);
    };
    return ClassRegex;
}());
exports.ClassRegex = ClassRegex;
