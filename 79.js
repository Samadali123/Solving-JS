
let pr = Number(prompt("Enter a numberrr."))
if(pr === 0){
    console.log("Please do not cancelled the tab....")
}
else{

    if(isNaN(pr)){
        console.log("Please Enter a valid numberr....")

    }else{

       if(pr > 0){
        let sum =0;
        for(let i=1; i<=pr; i++){
            sum+=i;
        }

        console.log("sum is ", sum);
       }
       else{
        console.log("Please Enter a positive number pleaseee grater than zerooooooo")
       }
    }
}