// Binary Search

let arr = [10,18,87,90,100]; // Array must be sorted for binary search
let searchElement = 99;

let start = 0;
let end = arr.length-1;
let middle = Math.floor((start+end)/2);
let index;

while(start<=end){
    if(arr[middle] === searchElement){
        index = middle;
        break;
    } else if(arr[middle] > searchElement){
        end = middle-1;
    } else {
        start = middle+1;
    }
    middle = Math.floor((start+end)/2);
}

if(index === undefined){
    console.log("Desired Element not found in an Array!")
}else{
     console.log("Desired Element found at index", index)
}