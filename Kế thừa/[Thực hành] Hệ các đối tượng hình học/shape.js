"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = 'green';
        this.filled = true;
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.isFilled = function () {
        return this.filled;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.toString = function () {
        return "A Shape with color of ".concat(this.getColor(), " and ").concat(this.isFilled() ? 'filled' : 'not filled');
    };
    return Shape;
}());
exports.Shape = Shape;
