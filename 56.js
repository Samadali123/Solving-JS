// write a js fnc to get the number of occurrences of each letter in a specified string...

function calculateNumberOfOccurrences(str) {
    let frequency = {};
    str.split('').forEach(function(char) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    });
    return frequency;
}

console.log(calculateNumberOfOccurrences("samad"));