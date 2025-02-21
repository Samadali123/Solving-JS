// saare members ka sum kro string ko chodh kee

let arr = ["samad",  "fsdfdfdsf", 2, 3, 4,5, "dff"]
let sum = 0;
arr.forEach(function(item){
     if(item === Number(item)){
            sum+=item
     }
})
console.log(sum)
