// Accept a number and check if it is a armstrong number (Sum of cube of all digits will be equal to 
//     origional number) 
//     Ex - 407 = 64 + 0 + 343 = 407 
//     153 = 1 + 125 + 27 = 153



const input = prompt("Enter a number:");

if (!input || input.trim() === "" || isNaN(input)) {
    console.log("Please enter a valid number. Do not cancel or leave it blank.");
} else {
    const number = Number(input);

    if (number <= 0) {
        console.log("Please enter a positive number greater than 0.");
    } else {
        let sum = 0;
        let temp = number;

        while (temp > 0) {
            const digit = temp % 10;
            sum += digit ** 3; // or digit * digit * digit
            temp = Math.floor(temp / 10);
        }

        if (sum === number) {
            console.log(`${number} is an Armstrong Number`);
        } else {
            console.log(`${number} is NOT an Armstrong Number`);
        }
    }
}
