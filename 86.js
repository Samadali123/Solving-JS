// Strong number

let  pr = prompt("Enter a number....");

if(pr === null){
    console.log("Cancelled")
}
else{
    let n = Number(pr)

    if(isNaN(n)){
        console.log("Please enter a valid numberr")
    }else{

        if(n>0){
            let sum = 0;
            let copy = n;

             while(n>0){
             let  rem = n%10;
             let fact = 1;
               for(let i=1; i<=rem; i++){
                fact*=i;
               }
               sum+=fact;
               n  = Math.floor(n/10)
             }


             if(copy === sum){
                  console.log("Strong Number")
             }else{
                  console.log("Not  a Strong number.")
             }
        }
    }
}

