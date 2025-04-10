// Accept a number and check if it is a Harshad number 
// Harshad number is a number or an integer which is completely divisible by sum of its digits. 
// Ex - 24 = Sum of 2+4 = 6 & 24%6 = 0



const input = prompt("Enter a number:");

if (!input || input.trim() === "" || isNaN(input)) {
    console.log("Please enter a valid number. Do not cancel or leave it blank.");
} else {
    const number = Number(input);
    let sum = 0;
    for(let i=1;   i<=Math.floor(number/2); i++){
              if(number % i === 0){
                  sum +=i;
              }
    }

    if(number % sum === 0){
       console.log("Hashad Numeber ")
    }else{
          console.log("Not a Harshad Number")
    }
   
}