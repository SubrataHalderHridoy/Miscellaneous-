// let arr1 = [1, 2, 3, 4];
// let arr2 = [4, 5, 6, 7];
// arr1.sayHello = () => {
//     console.log("hello!, i am arr");
// };

// const { constrainedMemory } = require("node:process");

// arr2.sayHello = () => {
//     console.log("hello!, i am arr2");
// };


// ** factory function  **
// function personMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };

//     return person;
// }

// let p1 = personMaker("hridoy", 23); // copy
// let p2 = personMaker("eve", 25); //copy



// ** constructors - doesn't retutn anything & start with capital
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("hridoy", 23);
// let p2 = new Person("eve", 25);




// ** classes 
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 26);




// ** Inheritance
// class Person{
//     constructor(name, age){
//         console.log("Person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
// class Student extends Person{
//     constructor(name, age, marks){
//         console.log("student class constructor");
//         super(name, age);   // parent class constructor is being called
//         this.marks = marks;
//     }
// }


// class Teacher extends Person{
//     constructor(name, age, subject){
//         super(name, age);   // parent class constructor is being called
//         this.subject = subject;
//     }
// }



// ** Inheritance
class Mammal{   // base class / paren class
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }

    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mammal{  // child class
    constructor(name){
        super(name);
    }
    bark(){
        console.log("wooff...");
    }
    eat(){   // overwrite
        console.log("I am eating");
    }
}
class Cat extends Mammal{  // child class
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow...");
    }
}