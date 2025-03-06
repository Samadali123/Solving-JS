// Amount  0-5000  discount 0%
// Amount  5000-7000  discount 5%
// Amount  7000-9000  discount 10%
// more than 9000  discount 20%
// find paid to value after discount apply 




// let number = Number(prompt("Enter a total amount to paid ?"))

// if(number === null){
//       alert("Please do not cancelled the tab please enter the amount to pay")
// }
// else{
//         if(isNaN(number)){
//             alert("PLease enter a valid number.....")
//         }
//         else{
//             if(number > 0 && number <= 5000){
//                 console.log("you have to pay"+ number);
//             }
//             else if(number > 5000 && number <= 7000){
//                 console.log("you have to pay",number - Math.floor((5*number)/100))
//             }
//             else if(number > 7000 && number <=9000){
//                 console.log("you have to pay", number- Math.floor((10*number)/100))
//             }
//             else if(number > 9000){
//                 console.log("you have to pay", number-Math.floor((20*number)/100))
//             }
//         }
// }





let number = Number(prompt("Enter a total amount to paid ?"))
let discount = 0;

if(number === null){
    alert("Please do not cancel the tab, enter an amount...")
}
else{
    if(isNaN(number)){
        alert("Please enter a valid number.....")
    }
    else{
        if(number > 0 && number <= 5000){
            discount = 0;
        }
        else if(number > 5000 && number <= 7000){
            discount = 5;
        }
        else if(number > 7000 && number <= 9000){
            discount = 10;
        }
        else if(number > 9000){
            discount = 20;
        }

        console.log(`You have to pay ${number - Math.floor((discount * number) / 100)}`)

    }
}