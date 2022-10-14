"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
function reverse(arr) {
    var stack = new Stack_1.Stack();
    for (var i in arr) {
        stack.push(arr[i]);
    }
    arr = [];
    while (stack.size() !== 0) {
        arr.push(stack.pop());
    }
    return arr;
}
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(reverse(arr));
