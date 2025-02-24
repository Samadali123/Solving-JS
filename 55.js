// Write a JavaScript function that accepts a string and converts the first letter to uppercase and returns it.

function capitalizeFirstLetter(str){
      return str.charAt(0).toUpperCase()+str.slice(1)
}
console.log(capitalizeFirstLetter("samad"))