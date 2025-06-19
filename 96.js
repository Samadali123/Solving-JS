// Oops : classes and objects and oops principles : abstraction,encapsulation, polymorphusm, inheritance.

// using object literals
const name  = {
     "firstname" : "Syed",
      "middlename": "Samad",
      "lastname":"ali",
      greet :function(){
        console.log("Hellllllllloo")
      }
}

// console.log(name)
// console.log(name.firstname)
// console.log(name["lastname"])

name.age = 22;
// console.log(name.age)
delete name.age;
// name.greet();

//using new keyword
const obj2 = new Object();
obj2.name = "samad";
// console.log(obj2.name)



//  using constructor function

function Person(name,age){
    this.name =name;
    this.age = age;
}

const p1 = new Person("samad", 22);
// console.log([p1.name, p1.age])




// using class keyword

class  Animal{
       constructor(name, type){
              this.name = name;
              this.type = type;
       }

       sound(){
        console.log(`${this.name} makes sound`)
       }
}


const dog =  new Animal("dog", "pet")
// dog.sound()





// Using Object.create();

class animal{
        speak(){
             console.log(`${this.name} makes a sound....`)
        }
}


const  cat = Object.create(animal);
cat.name = "meooo"
// console.log(cat)
// cat.speak()




let family = {
       name : "syeds",
       numberofpeoples:7,
}

// for(let key in family){
//     console.log(key)
// }




// abstraction 

// in older version
// function Vehicle(make, model) {
//     let engineRunning = false; // Private variable

//     this.make = make;
//     this.model = model;

//     this.startEngine = function() { // Public method
//         engineRunning = true;
//         console.log(`${this.make} ${this.model} engine started.`);
//     };

//     this.stopEngine = function() { // Public method
//         engineRunning = false;
//         console.log(`${this.make} ${this.model} engine stopped.`);
//     };

//     // No direct way to access engineRunning from outside
//     this.isEngineRunning = function() {
//         return engineRunning;
//     };
// }

// const car = new Vehicle('Toyota', 'Camry');
// car.startEngine(); // Abstraction: You don't need to know *how* the engine starts
// console.log(car.isEngineRunning()); // true






// class Vehicle {
//     #engineRunning = false; // Private class field (ES2020+)

//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     startEngine() {
//         this.#engineRunning = true;
//         console.log(`${this.make} ${this.model} engine started.`);
//     }

//     stopEngine() {
//         this.#engineRunning = false;
//         console.log(`${this.make} ${this.model} engine stopped.`);
//     }

//     isEngineRunning() {
//         return this.#engineRunning;
//     }
// }

// const car = new Vehicle('Honda', 'Civic');
// car.startEngine();
// console.log(car.isEngineRunning()); // true
// // console.log(car.#engineRunning); // Syntax error: Private field cannot be accessed




// Encapsulation

// function BankAccount(initialBalance) {
//     let balance = initialBalance; // Encapsulated/private variable via closure

//     this.deposit = function(amount) {
//         if (amount > 0) {
//             balance += amount;
//             console.log(`Deposited: $${amount}. New balance: $${balance}`);
//         }
//     };

//     this.withdraw = function(amount) {
//         if (amount > 0 && amount <= balance) {
//             balance -= amount;
//             console.log(`Withdrew: $${amount}. New balance: $${balance}`);
//         } else {
//             console.log("Insufficient funds or invalid amount.");
//         }
//     };

//     this.getBalance = function() {
//         return balance;
//     };
// }

// const myAccount = new BankAccount(1000);
// myAccount.deposit(500); // Accessing balance through public methods
// myAccount.withdraw(200);
// console.log(myAccount.balance); // Undefined, balance is encapsulated




// class BankAccount {
//     constructor(initialBalance) {
//         this._balance = initialBalance; // Conventionally private with underscore
//     }

//     get balance() { // Getter to access balance
//         return this._balance;
//     }

//     set balance(newBalance) { // Setter to modify balance with validation
//         if (newBalance >= 0) {
//             this._balance = newBalance;
//         } else {
//             console.log("Balance cannot be negative.");
//         }
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount; // Uses the setter
//             console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount; // Uses the setter
//             console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
//         } else {
//             console.log("Insufficient funds or invalid amount.");
//         }
//     }
// }

// const myAccount = new BankAccount(1000);
// myAccount.deposit(500);
// myAccount.withdraw(200);
// myAccount.balance = -100; // Will log "Balance cannot be negative."
// console.log(myAccount.balance); // Still 1300





// Inheritance


// Parent Constructor
// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(`${this.name} makes a sound.`);
// };

// // Child Constructor
// function Dog(name, breed) {
//     Animal.call(this, name); // Call parent constructor to inherit properties
//     this.breed = breed;
// }

// // Inherit methods from Animal's prototype
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog; // Set constructor back to Dog

// Dog.prototype.bark = function() {
//     console.log(`${this.name} barks!`);
// };

// const myDog = new Dog('Buddy', 'Golden Retriever');
// myDog.speak(); // Buddy makes a sound. (Inherited from Animal)
// myDog.bark();  // Buddy barks! (Specific to Dog)
// console.log(myDog.name); // Buddy









// // Parent Class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// // Child Class
// class Dog extends Animal { // 'extends' keyword for inheritance
//     constructor(name, breed) {
//         super(name); // Call the parent's constructor
//         this.breed = breed;
//     }

//     bark() {
//         console.log(`${this.name} barks!`);
//     }

//     // Method overriding (Polymorphism)
//     speak() {
//         console.log(`${this.name} says woof!`);
//     }
// }

// const myDog = new Dog('Max', 'German Shepherd');
// myDog.speak(); // Max says woof! (Overridden method)
// myDog.bark();  // Max barks!
// console.log(myDog.name); // Max




// Polymorphsim


function Animal(name) {
    this.name = name;
}
Animal.prototype.makeSound = function() {
    console.log(`${this.name} makes a generic sound.`);
};

function Cat(name) {
    Animal.call(this, name);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.makeSound = function() { // Method overriding
    console.log(`${this.name} meows.`);
};

function Duck(name) {
    Animal.call(this, name);
}
Duck.prototype = Object.create(Animal.prototype);
Duck.prototype.constructor = Duck;
Duck.prototype.makeSound = function() { // Method overriding
    console.log(`${this.name} quacks.`);
};

const animals = [new Animal('Creature'), new Cat('Whiskers'), new Duck('Daffy')];
animals.forEach(animal => animal.makeSound());
// Output:
// Creature makes a generic sound.
// Whiskers meows.
// Daffy quacks.




