// user will ask a number btw 0 to 9 and if the number is below 5 resolve if not reject



const promise = new Promise((res, rej)=>{
    let n = Math.floor(Math.random() * 10)

    if (n  < 5){
        return res("Resolved successgully")
    }else{
        return rej("Rejected successfully")
    }
})

promise.then(function(data){
console.log(data)
}).catch(function(error){
console.log(error)

})