// write a js program to find the duplicates value of an array.

let arr = [1, 2, 3, 2, 4, 1, 5, 3, 2, 1, 4, 6, 5, 7, 8, 8];
let frequency = {};
let duplicates = [];

// Count frequency of each element
arr.forEach(function(item) {
    if(frequency[item]) {
        frequency[item]++;
    } else {
        frequency[item] = 1;
    }
});

// Find elements with frequency > 1
for(let key in frequency) {
    if(frequency[key] > 1) {
        duplicates.push(Number(key)); // Push the actual duplicate number
    }
}

console.log(duplicates); // Will print [1, 2, 3, 4, 5, 8]