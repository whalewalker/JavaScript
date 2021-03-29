let userInput = 1011;
let base = 2;

let decimal = 0;
let power = 0;
function convertToBaseTwo(number, base) {

    while (number != 0) {
        let remainder;

        remainder = userInput % 10;

        decimal += remainder * Math.pow(base, power++);

        userInput = Math.trunc(userInput / 10);
    }
    return decimal;
}

let value = convertToBaseTwo(userInput, base);
console.log(value);

function addition(a, b){
    return a + b
}

console.log(addition(2, 3))
