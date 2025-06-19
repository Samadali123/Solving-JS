// currying functions :  functionc currying is a js technique that breaks down a fucntion  with multiple arguments into a series of functions5 together.


// it makes code more resulable, modular, and used for partial appplications.


// function add(a){
//         return function(b){
//                return a+b;
//         }
// }

// // console.log(add(5) (10));
// const ans = add(10);
// console.log(ans(20));




// function  add(a){
//      return function(b){
//            return function(c){
//             return a+b+c;
//            }
//      }
// }

// console.log(add(10)(20)(30));



// function currying with arrow functions

const add = a=> b=> c=> a+b+c;
// console.log(add(10)(20)(30))


