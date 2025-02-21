// write a javascipt to clone an array .

function cloneArray(input){

    let clonedarr = [];
    for(let i=0; i<=input.length-1; i++){
           clonedarr.push(input[i])
    }

    return {
         Array : clonedarr,
         sizeofArray : clonedarr.length
    }
}

console.log(cloneArray([1,2,3,4,5]))

