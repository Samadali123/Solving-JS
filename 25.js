// - saare elements jo array me unka sum print kro as an answer..

let arr = [1,2,3,4,5]


const ans = arr.reduce(function(acc, cval){
     return acc = acc+cval;
}, 0)


console.log(ans)
console.log(arr)
