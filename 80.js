

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
              let fact = 1;
              for(let i = 1; i <=pr; i++){
                   fact*=i;
              }

              console.log("Fcatorial of a number is: " + fact)
        }else{
              console.log("Please enter a valid postibe number not negatibe one")
        }
    }
}