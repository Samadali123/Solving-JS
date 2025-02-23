// ek array se ek new array me dalo agar word ki length 5 ho toh use p tag pe dalo nhi toh span tag me 
// dalo do using map


let words = ["apple", "banana", "papayaaa,", "watermelon", "roseberry"]


const result = words.map(function(word){
          if(word.length === 5){
                 return  `word is length of 5 ${word}`
          } else {
                 return `word is not equal to 5 ${word}`
          }
})

console.log(result)