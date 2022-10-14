"use strict";
exports.__esModule = true;
var Queue_1 = require("./Queue");
var Stack_1 = require("./Stack");
function check(str) {
    var stack = new Stack_1.Stack();
    var queue = new Queue_1.Queue();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        stack.push(i);
        queue.enqueue(i);
    }
    for (var _a = 0, str_2 = str; _a < str_2.length; _a++) {
        var i = str_2[_a];
        if (stack.pop() !== queue.dequeue()) {
            return 'Chuỗi không đx';
        }
    }
    return 'CHUỖI ĐX';
}
console.log(check('er5e'));
