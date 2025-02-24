function reverseNumber(number) {
    let reverse = 0;
    while(number > 0) {
        let remainder = number % 10;
        reverse = (reverse * 10) + remainder;
        number = Math.floor(number / 10);
    }
    return reverse;
}

let number = 123;
console.log("Reverse of a number is ", reverseNumber(number));
