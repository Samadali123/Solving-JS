// ek array of objects hai, aur us array mein hum logo ke pass kaafi deta hai, usse ek array baano 
// jisme sirf name ho

let  users = [

    {name : "samad", age : 22, profession : "developer"},
    {name : "Ahsan", age : 22, profession : "developer"},
    {name : "john", age : 25, profession : "designer"},
    {name : "sarah", age : 28, profession : "manager"},
    {name : "mike", age : 24, profession : "developer"}

]

const arrofnames = users.map(function(user){
    return user.name
})

console.log(arrofnames)
