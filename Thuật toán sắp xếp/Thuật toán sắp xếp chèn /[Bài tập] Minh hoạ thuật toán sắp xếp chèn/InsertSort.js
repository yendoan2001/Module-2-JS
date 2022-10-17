"use strict";
exports.__esModule = true;
exports.InsertionSort = void 0;
var InsertionSort = /** @class */ (function () {
    function InsertionSort() {
    }
    InsertionSort.insertSort = function (arr) {
        var i, key, j;
        for (i = 1; i < arr.length; i++) {
            key = arr[i];
            j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
            console.log("List after the  " + i + " sort: ");
            for (var j_1 = 0; j_1 < arr.length; j_1++) {
                console.log(arr[j_1] + "\t");
            }
            console.log();
        }
    };
    InsertionSort.numbers = [8, 3, 6, 1, 4, 10, 2, 50];
    return InsertionSort;
}());
exports.InsertionSort = InsertionSort;
