// The logic of this problem is to shuffle an array randomly using the Math.random() function. 
// Here's how it works:
// 
// 1. First, we create a copy of the original array using the slice() method to avoid modifying the original array.
// 2. Then, we use the sort() method to sort the copied array. The sort() method takes a compare function as an argument.
// 3. In the compare function, we use Math.random() to generate a random number between 0 and 1.
// 4. Subtracting 0.5 from the random number ensures that the compare function returns a positive or negative number randomly.
// 5. The sort() method uses this compare function to sort the array. Since the compare function returns a random value, the array is shuffled randomly.
// 6. Finally, we log the shuffled array to the console.



let arr =[1,2,3,4,5]
console.log("Original array: ", arr)
let shuffledArr = arr.slice().sort(()=> Math.random()-0.5);
console.log("Shuffled array: ", shuffledArr)


console.log(Math.floor(Math.random()*10))
