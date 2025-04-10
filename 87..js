// Accept a number and check if it is a pallindromic number (If number and its reverse are equal) 
// Ex - 12321 - Rerverse - 12321


const input = prompt("Enter a number:");

if (!input || input.trim() === "" || isNaN(input)) {
    console.log("Please enter a valid number. Do not cancel or leave it blank.");
} else {
    const num = Number(input);

    if (num <= 0) {
        console.log("Please enter a positive number greater than 0.");
    } else {
        let copy = num;
        let reverse = 0;

        while (copy > 0) {
            const digit = copy % 10;
            reverse = reverse * 10 + digit;
            copy = Math.floor(copy / 10);
        }

        if (reverse === num) {
            console.log(`${num} is a Palindromic number`);
        } else {
            console.log(`${num} is NOT a Palindromic number`);
        }
    }
}
