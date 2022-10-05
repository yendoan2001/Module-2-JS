let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let num: number[]=[];
let i=0;
while(i<numbers.length){
    if(numbers.indexOf(i)===-1){
        num.push(i)
    }
    i++
}
console.log(num);
