// Create a new array from an existing array using the filter method to save only the elements that match a condition

let names = ["samad", "ahsan", "Syedsamadali", "arhamali", "Salimkhan"]

const filternames = names.filter(function(name){
       const word = name;
       if(word.startsWith("S")) return word
})

console.log(filternames)
