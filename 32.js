// woh numbers retrun kro odd ho using filter method

let numbers = [ 1,2,3,4,5,6,7,8,9,11,12,111,123]

const oddNumbers = numbers.filter(function(number){
      return   number %2 !== 0
})

console.log(oddNumbers)
