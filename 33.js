// - array mein jitne bhi naam hai jinke name mein a arha ho unhe remove krdo baki ek new array mein 
// save krdo using filter methd

const { name } = require("ejs")


let names = ["Arham", "Ahsan", "sfdffvfvfv", "tuhuuur", "zeeshun"]

const ANames  = names.filter(function(name){
       return  name.includes("a") || name.startsWith("a")

})

console.log(ANames)
