


let pr = Number(prompt("Enter a number"))
if(pr === undefined || pr === null || pr === 0){
    console.log("Please do not cancelled the tab.")
}

else{

    if(isNaN(pr)){
        console.log("please enter a number not a string")
    }
    else{
        if(pr >0){
            
        console.log(isPrime(pr))

        }else{
              console.log("Please enter a valid postibe number not negatibe one")
        }
    }
}



function isPrime(n){
       if(n<=1)  return false;
       if(n ==2 ) return true;
       if(n%2 == 0) return false;

       for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
            if(i%2 == 0) return false;
       }
}

