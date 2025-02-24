// write a js program to add to compute the sum of each individual index values of a given two arrays

let arr1 = [1,2,3,4,5]
let   arr2 = [6,7,8,9,10];

let sum  = 0;

for(let i = 0; i < arr1.length; i++){
    sum += arr1[i]+arr2[i];
}

console.log(sum);
