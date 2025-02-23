// write a js program to find the frequency of each element of an array..

let arr = [1, 2, 3, 2, 4, 1, 5, 3, 2, 1, 4];

let frequency = {};

arr.forEach(function(item){
     if(frequency[item] ) {
         frequency[item]++;
     }else{
          frequency[item] = 1;
     }
})

console.log(frequency);
