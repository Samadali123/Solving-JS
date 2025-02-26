// write a js fnc to get the most frequent element of an array
let arr = [1,3,1,4,5,123,4,13,4,51,3,4]
let frequency = {};

for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
        frequency[arr[i]]++;
    } else {
        frequency[arr[i]] = 1;
    }
}

let maxFrequency = 0;
let mostFrequentElement = null;

for (let key in frequency) {
    if (frequency[key] > maxFrequency) {
        maxFrequency = frequency[key];
        mostFrequentElement = key;
    }
}

console.log(`Most frequent element is ${mostFrequentElement} with frequency ${maxFrequency}`)
