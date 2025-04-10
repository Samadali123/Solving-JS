// Accept a number and check if it a perfect number or not. 
// A number whose sum of factors(excluding number itself) = Number 
// Ex - 6 = 1, 2, 3 = 6




const input = prompt("Enter a number:");

if (!input || input.trim() === "" || isNaN(input)) {
    console.log("Please enter a valid number. Do not cancel or leave it blank.");
} else {
    const number = Number(input);

    if (number <= 0) {
        console.log("Please enter a positive number greater than 0.");
    } else {
        let sum = 0;
        for(let i=1;  i<=Math.floor(number/2);   i++){
                     if(number%i === 0){
                           sum+=i;
                     }
        }

        if(sum ===  number){
          console.log("perfect numbe")
        }else{
           console.log("Not a perfect numbe")
        }

        
    }
}