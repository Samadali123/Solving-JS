// Accept a number and print it reverse

let number = Number(prompt("Enter a number ?"))
if( number === null || undefined || 0){
    alert("Please enter a number do not cancellllllll")
}
else{

    if(number <= 0){
         alert("Please Enter a positive number greater then 0") 
    }else{
           
        let reverse = 0;
        while(number > 0){
             let lastdigit = number%10;
             reverse = reverse*10+lastdigit;
             number = Math.floor(number/10);
        }


        console.log(`Reverse of a number is ${reverse}`)
    }
}