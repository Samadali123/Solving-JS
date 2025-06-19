// IIFE    : Immediately Invoked function Expression

// (function(){
//      console.log("HELLO")
// })();



// var message = "Global Message";

// (function(){
//       var message = "inside fucntoon message";
// })();

// console.log(message)



// IIFE using arrow  function


// (()=>{console.log("IIFE with Arrow fucntion")})();




// EncapSulation using IIFe :

// const counter = (function(){
//  let count = 0;   // private Variablessss
//     return {
//           increment : function(){
//             count++;
//             console.log(count)
//           },

//           decrement : function(){
//             count--;
//             console.log(count);
//           }
//     }
// })();

// counter.increment();
// counter.increment();
// counter.decrement();
// counter.decrement();





// q1 : Sum of Array Elements Using IIFE

// let sum = (function(arr) {
//     return arr.reduce((acc, num) => acc + num, 0);
// })([1, 2, 3, 4, 5]);

// console.log(sum);





// q2 :  Prevent Global Scope Pollution using IIFE

// (function() {
//     var x = 43;
//     console.log("Inside IIFE", x);
// })();

// console.log(x);





// q3 :  IIFE with Closures
// Problem: Return a function to add a fixed number to its argument.
// let add7 = (function() {
//     let fixed = 7;
//     return function(num) {
//         return num + fixed;
//     };
// })();

// console.log(add7(10));






// Q4 : IIFE to Toggle a Boolean
// Task: Use an IIFE to toggle a boolean variable 3 times and print the result each time


// let toggle = (function() {
//     let state = false;
//     return function() {
//         state = !state;
//         console.log("Toggling:", state);
//         return state;
//     };
// })();
// toggle();
// toggle();

