// Fibonacci series - 0, 1, 1, 2, 3, 5, 8, 13, 21...

let firstNumber = 0;
let secondNumber = 1;

console.log(firstNumber);
console.log(secondNumber);

for (let i = 1; i <= 5; i++) {
    let nextNumber = firstNumber + secondNumber;
    console.log(nextNumber);

    firstNumber = secondNumber;
    secondNumber = nextNumber;
}
