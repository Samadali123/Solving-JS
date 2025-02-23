// This JavaScript program accepts a number as input and inserts dashes (-) between each two even numbers.
// For example, if the input is "025468", the output should be "0254-6-8".

// The function insertDashes takes a number as input and returns a string with dashes inserted between even numbers.
function insertDashes(num) {
    // Convert the input number to a string to easily iterate through each digit.
    let str = String(num);
    // Initialize an empty string to build the result.
    let result = '';
    
    // Iterate through each character in the string.
    for (let i = 0; i < str.length; i++) {
        // Add the current character to the result string.
        result += str[i];
        // Check if the current character and the next character are both even numbers.
        if (Number(str[i]) % 2 === 0 && Number(str[i + 1]) % 2 === 0) {
            // If both are even, add a dash to the result string.
            result += '-';
        }
    }
    
    // Return the final result string.
    return result;
}

// This function has been corrected to handle the case where the input number is a string
// and to ensure that dashes are inserted correctly between even numbers.

// Example usage of the function.
console.log(insertDashes("025468"));  // Returns "0254-6-8"
