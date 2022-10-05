function Fibonacci():number{
    const number = 50;
    let num1 = 1, num2 = 1, result=0;
    for (let i = 1; i <= number; i++) {
        console.log(num1)
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }
    return num1
}
console.log(Fibonacci());