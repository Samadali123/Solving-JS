// Write a Js program to read the value of an integer m and display the value of n is 1 when m is 
// larger than 0, 0 when m is 0 and -1 when m is less than 0.


function checkInteger(number){
        if(number > 0){
            console.log("number is greater then 1")
        } else if(number === 0){
            console.log("number is equal to zero")
        } 
        else{
            console.log("number is negative value")
        }
}

checkInteger(23)