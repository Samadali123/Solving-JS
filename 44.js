// linear serach in js

let arr = [1,3,0,9,10,45]
let searchElement = 77;
let index;
for(let i=0; i<arr.length; i++){
    if(arr[i] === searchElement){
          index = i;
          break;
    }
}

if(index  === undefined){
      console.log("Element is not found in the array");
}else{
     console.log("Element is found at index " + index);
}

