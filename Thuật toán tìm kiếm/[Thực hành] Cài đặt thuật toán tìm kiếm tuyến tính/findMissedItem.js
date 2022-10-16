function findMissedItem(arr) {
    var i = 1;
    var newArr = [];
    while (i <= 10) {
        if (arr.indexOf(i) == -1) {
            newArr.push(i);
        }
        i++;
    }
    return newArr;
}
var arr = [1, 2, 5, 6, 7, 10];
console.log(findMissedItem(arr));
