function Fibonacci() {
    var number = 50;
    for (var i = 1; i <= number; i++) {
        var num1 = 1, num2 = 1, result = 0;
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }
    return num1;
}
console.log(Fibonacci());
