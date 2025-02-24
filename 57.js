//  loop an array and add all memebers of it.

let arr = [1,2,3,4,5]

const sum = arr.reduce(function(acc, cval){
      return acc = acc+cval;
}, 0)

console.log(sum)