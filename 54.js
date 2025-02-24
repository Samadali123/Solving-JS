// Write a JavaScript function that returns a passed string with all letters in alphabetical order.


function sortString(str){
    return str.split("").sort().join("")
}
console.log(sortString("dfdfdffsfdfdf"))