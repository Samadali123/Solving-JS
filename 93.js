// there are 4 types of scopes are there
// global scope
// fucntion scope
// block scope
// lexical scope(closures)

// closures is a concept in which inner fucntion or a return fucntion can access parents function propeties and data.


// let name1 =  "Samad"; //  braces scope
// var name2 = "Sammy";  // fucntoon scope or global scope
// const name3 = "unknwon"; // brces scope

// function scope.
// function f1(){
//     var a1 = 10;
//     let a2 = 20;
//     const a3 = 30;
//     console.log(a1, a2,a3);
//       console.log("Inside function", name1, name2, name3);
// }

// f1();


// block scope
{
    // var age1 = 22;
    // let age1 = 22;
    // const age1 = 22;
    // console.log("Inside block", name1, name2, name3);
}



// global Scope
// console.log(age1);
// console.log("outside block ",  name1, name2, name3);




// lexical scope (closures);
 
// function outerfnc(){
//      let age = 22;
//     return function Innerfnc(){
//           console.log(age);
//     }
// }
 
// const Innerfnc = outerfnc()
// Innerfnc()




//q1 : Implement a function that remembers a counter value

// function createCounter() {
//     let count = 0;
//     return function() {
//         count+=10;
//         return count;
//     };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());




//q2 : Implement a private variable using closures
function secretStorage(secret) {
    return {
        getSecret: function() {
            return secret;
        }
    };
}

const mySecret = secretStorage("I love JS!");
// console.log(mySecret.getSecret());



function Idgenerator(){
    let id = 0;
    return function(){
        id+=1;
        return `Id is ${id}`;
    }
}

const ans = Idgenerator();
// console.log(ans());
// console.log(ans());





//q3 : Implement a function that caches results using closures (Memoization)

function memoize(fn) {
    let cache = {};
    return function(num) {
        if (cache[num] !== undefined) {
            console.log("Fetching from the cache...");
            return cache[num];
        } else {
            console.log("Computing results...");
            let result = fn(num);
            cache[num] = result;
            return result;
        }
    };
}

const square = memoize((x) => x * x);
// console.log(square(4));
// console.log(square(4));
// console.log(square(5));






//q4 :  Implement a function that returns multiple counters using closures

function createMultiCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}

const counterA = createMultiCounter();
const counterB = createMultiCounter();

// console.log(counterA.increment());
// console.log(counterA.increment());
// console.log(counterB.increment());
// console.log(counterA.decrement());
// console.log(counterA.getValue());




