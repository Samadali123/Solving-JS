
function isPalindrome(str){
    let result;
    let lastIndex = str.length-1;
    for(let i=0; i<str.length/2; i++){
          if(str[i] !== str[lastIndex]){
             result = false;
          }
          lastIndex--;
          result = true;
    }

    return result;
}

console.log(isPalindrome("oyo"))