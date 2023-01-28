
//lesson 44
// //constructor for person
// function Person(name, age){
//     this.name = name;
//     //this.age = age;
//     this.birthday = new Date(dob);
//     this.getAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const brad = new Person('Alex', '11-15-1994');


//lesson 45
// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// //gives error when comparing object with a string
// if(name2 === 'Jeff'){
//     console.log('YES');
// }else{console.log('NO');}

// //Num
// const num1 = 5;
// const num2 = new Number(5);

// //Bool
// const Bool1 = true;
// const Bool2 = new Boolean(true);

// //function to get sum
// const getSum1 = function(x, y){
//     return x + y;
// }

// //new way to get return value
// const getSum2 = new Function('x', 'y', 'return 1 + 1');

// //object version
// const john1 = {name: "John"};
// const john2 = new Object({name: "John"});
 
// //Array versions, return the same
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// //regex
// const re1 = /\w+/;
// const rel2 = new RegExp('\\w+');



//lesson 46

// //Object.prototype, Person.prototype
// //constructor for person
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.getAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }

// //get full name prototype
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// //modify prototype is "powerful!"
// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// }

// const alex = new Person('Alex', 'Labra', '11-15-1994');
// const jane = new Person('Jane', 'Ajax', '10-10-1999');


//Lesson 47

// //person constructor
// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// //greeting function
// Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// //customer constructor
// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
// }

// //we have to inherit prototype 
// Customer.prototype = Object.create(Person.prototype);

// //customer.prototype must return Customer()
// Customer.prototype.constructor = Customer;

// //create a customer
// const customer1 = new customer('Tom', 'Smith', '666-666-6666', standard);

// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }



//Lesson 48 ES5 is WEIRD! last lesson of es5

// const personPrototypes =  {
//     greeting: function(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName){
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thomson');

// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'Brad'},
//     lastName: {value: 'Thomson'},
//     age: {value: 25}
// });

// console.log(brad.greeting());



//Lesson 49 ES6
// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }


//     greeting(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }

//     calculateAge(){
//         const diff = Date.now() - this.birthday.getTime;
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getFullYear - 1970);

//     }

//     getsMarried(newLastName){
//         this.lastName = newLastName;
//     }

//     static addNumbers(x, y) {
//         return x + y;
//     }

// }

// const mary = new Person('Mary', 'Williams', '11-12-2000');

// mary.getsMarried('Joker');

//Lesson 50 inheritance in ES6
class Person{
    constructor(firstName, lastName){
        this.lastName = lastName;
        this.firstName = firstName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John', 'Hall', '666-666-6666', 'standard');

console.log(john.greeting());
