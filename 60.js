// wirte a js function to get the last element of an array,passing a paramter n,will get the last n numbers 
// of an array


function getLastNElements(arr, n=1) {
    // This line returns a new array that includes the last 'n' elements of the original array 'arr'.
    // The 'slice' method is used to extract a section of the array into a new array.
    // The argument '-n' specifies the starting point for the slice, which is 'n' elements from the end of the array.
    // For example, if 'arr' is [1, 2, 3, 4, 5] and 'n' is 2, the function will return [4, 5].
    return arr.slice(-n);
}

console.log(getLastNElements([1,2,3,4,5],2));