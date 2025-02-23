// remove duplicates from an array

let arr = [1, 23, 1, 3, 4, 1, 4, 5, 5, 1, 4, 4, 5, 6];

let newArr = [...new Set(arr)];
console.log(newArr);


