import {Stack} from "./Stack";

function reverse(arr){
    let stack = new Stack<number>();
    for (const i in arr) {
        stack.push(arr[i]);
    }
    arr = [];
    while (stack.size()!==0){
        arr.push( stack.pop());
    } return arr
}
let arr=[1,2,3,4,5,6,7];
console.log(reverse(arr));
