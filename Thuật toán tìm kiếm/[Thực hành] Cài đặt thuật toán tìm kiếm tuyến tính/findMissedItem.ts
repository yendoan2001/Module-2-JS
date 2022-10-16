function findMissedItem (arr: number[]) {
    let i:number =1;
    let newArr: number[]=[];
    while (i<=10){
        if(arr.indexOf(i)==-1){
            newArr.push(i);
        }
        i++
    } return newArr
}

let arr=[1,2,5,6,7,10];

console.log(findMissedItem(arr));
