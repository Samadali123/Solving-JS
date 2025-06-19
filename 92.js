// higher order fucntions : taking fucntions as an arhument or return a function

//q1
// function operate(a, b, operation){
//        return operation(a,b);
// };

// function add(a,b){
//     return a*b;
// }
// console.log(operate(10,20,add));


//q2

// function greet(name){
//       return function(message){
//             console.log(`${message}, ${name}`);
//       }
// }

// const ans = greet("syed samad ali");
// ans("Hey code after a long time");



//q3 :

// function operate(a,b, operation){
//       return operation(a,b);
// }

// function add(a,b){
//     return a+b;
// }

// function multiply(a,b){
//     return a*b;
// }

// console.log(operate(10,20, multiply));


//q4:
// const nums = [1,2,3,4,5];

// // map function

// const ans = nums.map(num=> num*2);
// console.log(ans);


// q5:

// filter function

// const nums = [1,2,3,4,5];
// const ans = nums.filter(num=> num%2 == 0);
// console.log(ans);


//  q6 :
// reduce function

// const nums = [1,2,3,4,5];

// const ans = nums.reduce((acc, cval) => acc + cval, 0);
// console.log(ans);



// q7:
// Implement a Higher-Order Function that applies a function twice


// function ApplyTwice(value, fn){
//      return fn(value)
// }

// function ApplyThrice(value, fn){
//      return fn(fn(fn(value)))
// }

// function add(num){
//      return num+2;
// } 


// console.log(ApplyTwice(10, add));
// console.log(ApplyThrice(10, add));




// q8 :Implement a function that returns a function to multiply number

// function multiplyNumber(num){
//     return function(x){
//            return (num*x);
//     }
// }
// const ans = multiplyNumber(10)
// console.log(ans(2))



//q9: Implement a function that filters an array using a function

// function filterArray(arr, fn){
//     return arr.filter(fn)
// }

// console.log(filterArray([1,2,3,4,5,6,7,8,9,10],(num)=> num%2 === 0 ))



//q10 :  Implement a function that composes two functions together

// function Compose(x,y){
//      return function(z){
//         return x(y(z));
//      }
// }
// const double = (x)=> x*2;
// const Increment = (x)=> x+1;
// const composeFn = Compose(Increment, double);
// console.log(composeFn(5));




// q11 : Create a function once that ensures a function is called only once


// function once(fn) {
//     let called = false;
//     let result;
//     return function(...args) {
//         if (!called) {
//             called = true;
//             result = fn(...args);
//         }
//         return result;
//     };
// }

// const logMessage = once((msg) => console.log(msg));
// logMessage("Hello World");
// logMessage("Hello Again");
// logMessage("Hello Again");




