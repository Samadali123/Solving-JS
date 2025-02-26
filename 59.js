// loop an array of objects and remove alll objects which doesmt have male property

let names = [
    {name : "Samad", age : 22, profession:"Student", gender: "male"},
    {name : "John", age : 25, profession:"Teacher", gender: "male"},
    {name : "Jane", age : 28, profession:"Doctor", gender: "female"},
    {name : "Alex", age : 30, profession:"Engineer", gender: "male"},
    {name : "Emily", age : 27, profession:"Lawyer", gender: "female"}
]


const result = names.filter(function(elem){
     return elem.gender === "male"
})

console.log(result)