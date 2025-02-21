// Write a program to calculate factorial of a given number.

// function getFactorial(n) {
//    let fact = 1;
//    for(let i = n; i >= 1; i--) {
//        fact = fact * i;
//    }
//    return fact;
// }

// console.log(getFactorial(5))


function getFactorial(n){
    let fact = 1;
    while(n>=1){
        fact = fact * n;
        n--;
    }
    return fact;
}


console.log(getFactorial(5))
