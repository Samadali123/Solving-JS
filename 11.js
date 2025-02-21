// Write a program to take 3 integer numbers and display the largest number.

function checkLargestNumber(n1, n2, n3) {
    if (n1 === n2 && n2 === n3) {
        console.log("All numbers are equal");
        return;
    }

    let largest = n1;

    if (n2 > largest) {
        largest = n2;
    }
    
    if (n3 > largest) {
        largest = n3;
    }

    if (largest === n1) {
        console.log("A is greatest");
    } else if (largest === n2) {
        console.log("B is greatest");
    } else {
        console.log("C is greatest");
    }
}

checkLargestNumber(90, 90, 90);
