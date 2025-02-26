// write a js function to add two arrays and same number should not be repeated

let arr1 = [1,23,13,45,13,4,51]
let arr2 = [13,90,14,13,90]

function combinedArray (arr1,arr2){
       return [ ...new Set([...arr1, ...arr2])]
}


const result = combinedArray(arr1,arr2);
console.log(result)



