// - Write a program to display odd numbers upto 20.

function display_odd_numbers(number = 20){
     for(let i =1; i<=number; i++){
           if(  i%2 != 0){
            console.log(i);
           }
     }
}

display_odd_numbers(40);