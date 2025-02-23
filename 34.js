// - aise naam ko remove kro jinsme do yah do se zyaada baar a arha ho

let names = ["Ahsan", "Samad", "Samiya", "Arham", "tahoor", "salim", "sammy"]

const result = names.filter(function(name){
       let count = 0;
       let word = name.toLowerCase();

       for(let char of word){
           if(char === 'a'){
               count++;
           }
       }
       
       return count >= 2;
})

console.log(result)
