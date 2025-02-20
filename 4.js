// - Write a program to check whether a user is eligible to vote or not.

function CheckVoting(age){
     if(age >=18 && age <=50) return "Eligible to vote";
     else if (age <= 15) return "Underage"
     else return "Over Age";
}

console.log(CheckVoting(55));