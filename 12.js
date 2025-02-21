// user se maanngo ek number or agar numer 10 se zyada ho toh print kro hello nahi toh bye
// (Translation: Ask user for a number and if number is greater than 10 print hello otherwise bye)

// This code does the following:

// 1. First we import the readline module which helps us take input from user
const readline = require('readline').createInterface({
    input: process.stdin,    // Configure it to read from standard input (keyboard)
    output: process.stdout,  // Configure it to write to standard output (console)
});

// 2. Ask user for input using readline.question()
readline.question('Please enter a number: ', (number) => {
    // 3. Convert the input string to a number
    const num = Number(number
    )
    
    // 4. Check if number is greater than 10
    if(num > 10) {
        console.log("hello");  // Print hello if number > 10
    } else {
        console.log("bye");    // Print bye if number <= 10
    }
    
    // 5. Close the readline interface when done
    readline.close();

});
