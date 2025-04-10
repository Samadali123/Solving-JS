/// factos of a number



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
               
            for(let i=1; i<Math.floor(pr/2); i++){
                if(pr%i === 0){
                    console.log(i)
                }
            }

        }else{
              console.log("Please enter a valid postibe number not negatibe one")
        }
    }
}