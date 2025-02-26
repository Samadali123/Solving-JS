//loop n an array of strings add only those which are not a string

let str = ["samad", 12, "sammy", 4445,"csdcdscd", "dfdfddfhdfh"]
let sum = 0;
const result = str.filter(function(elem){
     if(typeof(elem)   === 'number'){
        sum += elem;
     }
     return sum;
})

console.log(`sum of numbers is ${sum}`)




