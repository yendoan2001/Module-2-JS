function calculator(number1, number2, operator) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    } else throw new Error('The operator must be an +,-,*,/')
    return result;
}
try{
    calculator(3,5,'#');
}
catch (e){
    console.log(e.message);
}
