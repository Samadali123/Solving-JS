//  sum of digits

let n = Number(prompt("Enter a number"))

if(n == null || 0){
     console.log("Please enter a number")
}


else{

    if(isNaN(n)){
            console.log("Please enter  a valid number")
    }else{
           if(n>0){
            let sum =0;
            while(n>0){
                let rem = n%10;
                 sum += rem;
                 n = n/10; 
            }

            console.log("Sum of digits of a number: " + sum)
        
           }else{
                console.log("Please enter a number  greater than zero")
           }
    }
}