// Write a program to display length of any string

let str = "Samad";

console.log(str.length);

let str2 = "Samad";

function checkStringLength(input){
    let counter = 0;
        for(let i = 1; i<= input.length; i++){
              counter++;
        }
        return `length of given input string is ${counter}`
}


console.log(checkStringLength(str2))

