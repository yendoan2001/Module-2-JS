import {Queue} from "./Queue";
import {Stack} from "./Stack";


function check(str:string): string{
    let stack = new Stack<string>();
    let queue = new Queue<string>();

    for (let i of str) {
        stack.push(i);
        queue.enqueue(i);
    }

    for (let i of str) {
        if (stack.pop()!==queue.dequeue()) {
            return 'Chuỗi không đx';
        }
    }
    return 'CHUỖI ĐX'
}

console.log(check('ere'))

