// in particular amount how many notes can be made of 500,200,100,50,20,10,5,2,1


let amount = Number(prompt("Enter the Amount")) // 5234
if(amount === 0){
   alert("Please do not cancel the tab")
}
else{
    if(isNaN(amount)){
        alert("Invalid Input")
    }
    else{
            if(amount >=500){
                   console.log("500 notes will be made",    Math.floor(amount/500));
                   amount = amount % 500;
            }
            if(amount >= 200){
                console.log("200 notes will be made",    Math.floor(amount/200));
                amount = amount % 200;
            }

            if(amount >= 100){
                console.log("100 notes will be made",    Math.floor(amount/100));
                amount = amount % 100;
            }

            if(amount >= 50){
                console.log("50 notes will be made",    Math.floor(amount/50));
                amount = amount % 50;
            }

            if(amount >= 20){
                console.log("20 notes will be made",    Math.floor(amount/20));
                amount = amount % 20;
            }

            if(amount >= 10){
                console.log("10 notes will be made",    Math.floor(amount/10));
                amount = amount % 10;
            }

            if(amount >= 5){
                console.log("5 notes will be made",    Math.floor(amount/5));
                amount = amount % 5;
            }


            if(amount >= 2){
                console.log("2 notes will be made",    Math.floor(amount/2));
                amount = amount % 2;
            }
            if(amount >= 1){
                console.log("1 notes will be made",    Math.floor(amount/1));
                amount = amount % 1;
            }

    }
}