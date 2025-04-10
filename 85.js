// find factroial of a number

let number = Number(prompt("Enter a numberrr"))
let sum = 0;

if(number === null ){
    console.log("cancellled ")
}
else{
         if(number <= 0){
            console.log("Please Enter a postive numeber");
         }else{
             let fact = 1;
              for(let i=1; i<=number; i++){
                   fact = fact*i;
              }
             
             console.log(`Factorial of a number is ${fact}`)
                
         }
}