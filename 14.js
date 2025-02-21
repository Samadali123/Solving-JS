// - user se do passwords maango agar woh dono password same hai toh login kro nahi toh wrong 
// password bolo 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter first password: ', (pass1) => {
    readline.question('Enter second password: ', (pass2) => {
        checkPasswords(pass1, pass2);
        readline.close();
    });
});

function checkPasswords(pass1, pass2){
    if(pass1 === pass2){
        console.log("Passwords are same!");
    }
    else{
        console.log("Passwords are not same!");
    }
}
