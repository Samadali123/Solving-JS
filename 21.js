// possible ways to create an object

let obj1 = {};
console.log(typeof obj1)

let obj2 = new Object(null)
console.log(typeof obj2)


class Animal {
      constructor(name, age){
           this.name = name;
           this.age = age
      }  
}

const dog = new Animal("JermanShaperd", 5)
console.log(typeof dog)
