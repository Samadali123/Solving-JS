// write the javascript fucntion to get the first element of an array, passing a parameter "n" then will 
// return the first n element of an array as an output..


function getElements(arr,n = 1){
      for(let i = 0; i<n;  i++){
        console.log(arr[i])
      }
}

getElements([1,2,3,4,5], 5);

