// - 5 second baad ek random number nikalo,or agr random number 5 se chota hai toh,hello print kro 
// nahi toh hii print kro



setTimeout(() => {
       let number = Math.floor(Math.random() * 10)
       if(number < 5) {
              console.log("Hello")
       } else {
              console.log("Hiii") 
       }
}, 5000)
