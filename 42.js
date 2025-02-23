// write a js program which accepts a string as input and change their cases uppercase to lowercase 
// and lowrrcase to uppercase..



function changeCase(str) {
    let result = "";
    for(let key of str){
        if(key === key.toUpperCase()){
            result += key.toLowerCase();
        }
        else{
            result += key.toUpperCase();
        }
    }

    return result;
}

console.log(changeCase("fdshfd shf zdscd faAWDWDWD fdf"));

