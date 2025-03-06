// upto 100 units price 4.4/unit
// 101-200 units price  6/unit
// 201-400 units  price 8/unit
// more than 400 13/unit



let units = Number(prompt("Enter the number of units  of a billl ?")) // 700
if(units == 0){
    console.log("Please do not cancel tgr tab pleae")
}

else { 
      if(isNaN(units)){
          console.log("Please eneter a valid unnits ")
      }
      else{
        let amount  = 0;

if(units > 400){
      amount += (units - 400)*13;
      units = 400;
}

if(units > 200 && units <= 400){
     amount += (units- 200)*8;
     units = 200;
}

if(units > 100 && units <= 200){
    amount += (units - 100)*6;
    units = 100;
}

amount += (units * 4.4);
console.log("You have to pay ", amount, " Rupees");


      }
} 
