// Write a Js program to calculate profit and loss on a transaction accept cost price and 
// selling price.



function calculateProfit(cp,sp){
        if(sp > cp){
            console.log("Profit", sp-cp);
        }
        else if(sp < cp){
            console.log("Loss", cp-sp);
        }

        else{
            console.log("No Profit No Loss");
        }
}

calculateProfit(90, 50)