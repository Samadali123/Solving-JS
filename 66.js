// Write a Js program to find whether a given year is a leap year or not.

function checkLeapyear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkLeapyear(2007))
// 4se devide hoga , 400 se divide hoga, 100 se nhi devide hoga. centru year
