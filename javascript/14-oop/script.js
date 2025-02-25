'use strict';
/*
// class are blueprints of objects

// 4 principles must be followed during oop

// abstraction: hiding the unimportant details

//Enacapsualtion:keeping proeprties and methods privates inside the class,so they are not accessible from outside the class.Some methods can be exposed
//as a public interface(API)

//inheritance
//one class can inherit from other

//child class inherits all properties and method from parent

//child class has its own properties as well as that of parents

//polymorphism:A child class can overwrite a method it inherited from parent class

// all objects in js are linked to prototype object

// prototyoe object contains methods ,all the objects linked to prototype object can use

//this behavior is called prototypal Inheritance:The prototype contains methods(behavior) that are accecisbe to all object linked to that prototype

//behavor(methods) is delegated to the linked prototype object

//how do implment oop in js

//1.constructor function
//technique to create objects from a fn

//this is how built in fn like arrays ,maps,sets are actually implemented

//2.ES6 Classes

//3)Object.creat()

//creating objects from constructor function

// A constructor function in JavaScript is a special type of function that is used to create and initialize objects. 
//It's like a blueprint for creating multiple objects with similar properties and methods. 
//When you use a constructor function to create an object, you are essentially defining a class from which you can create instances (objects) with shared characteristics.

// Here's how you can create a constructor function and use it to create objects:

// Define a constructor function for creating Person objects
function Person2(name, age) {
  this.name = name;
  this.age = age;

  // You can also define methods within the constructor
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

// Create instances (objects) using the constructor
var person1 = new Person2('Alice', 30);
var person2 = new Person2('Bob', 25);

// Access properties and methods of the objects
console.log(person1.name); // Output: "Alice"
console.log(person2.age); // Output: 25
person1.sayHello(); // Output: "Hello, my name is Alice and I am 30 years old."

const Person = function (fullName, birthYear) {
  console.log(this);
  //Instance properties
  this.fullName = fullName;
  this.birthYear = birthYear;

  //never create a method inside a constructor fn(as 1000s of objects will be there..we will also create 1000 copies of that fn)

  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

//static fns(can only be accesed using the constructor name or className not using their objects)
Person.hey = function () {
  console.log('Hey there 🙌');
};
Person.hey();

// jonas.hey();//cant be used

const jonas = new Person('Jonas', 1991); //calling the fn with new operator
//1.new empty object will be created rightaway

//2.afterwards function is called and this keyword is set to newly created object(this={})

//3.{} obj linked to prototype  (__proto__ = Person.prototype)  When you create an object using a constructor function, such as new Person(), the new object inherits from the prototype of that constructor.

// prototyoe object contains methods ,all the objects linked to prototype object can use

//4. function automatically returns  {}
console.dir(Person);
// console.log(jonas.hey());


console.log(jonas);

const matilda = new Person('Matilda', 2017); //instance of person

const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person);
// console.log(jaybro instanceof Person);

//Prototypes

// each and every fn in js has prototype property  that includes the constructor fn

//hence the objects created using constructor fn(it is linked to prototype of the constructor fn) also has acces to protype property

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//since the objects or instance of person has acces to prototype object and its methods

jonas.calcAge(); //this way will work even though jonas doesnt contain calcAge method

//we have acces to it because of prototypal inheritance

// all of the instance or objects created using the constructor fn can basically use the calcAge fn

console.log(jonas.__proto__);

// In simple words, a prototype in JavaScript is like a blueprint or template for objects. It's an object itself that contains shared properties and methods that other objects can inherit. Think of it as a set of instructions for creating similar objects with common characteristics. Objects created from the same prototype share these characteristics, making it easier to manage and reuse code.

console.log(jonas.__proto__ === Person.prototype); //Person.prototype is not the prototype of person,but instead,it is what its gonna be used as the prototype of all objects that are created with person constructor fn

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('fullName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

// .prototype is used to point the prototype object
// .constructor is used to point back at the constructor fn
console.dir(Person.prototype.constructor);

const arr = [3, 3, 3, 2, 2]; //new Array===[]
//new Array is the construtor used to create arrays(Abstraction)

console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

//generally not a good idea to expand the inbuilt prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

//all dom elements are bts objects    bts implies behind the scenes
const h1 = document.querySelector('h1');
// console.dir(h1);
console.dir(h1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.break = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 110);
const mercedes = new Car('Mercedes', 100);
bmw.accelerate();
mercedes.break();

//ES6 classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName; //this assignment triggers the fullName setter
    this.birthYear = birthYear;
  }

  //Instance methods
  //all methods written outside constructor will be on prototype of object of Personcl class and not on the object itself
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  //this getter method is also stored in the prototype object

  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that already exists

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  //static method
  static hey() {
    console.log(`Hey there`);
  }
}

PersonCl.hey();
//calling the class with new operator constructor will be invoked

//1.new empty object will be created rightaway

//2.afterwards function is called and this keyword is set to newly created object(this={})

//3.{} obj linked to prototype  (__proto__ = Person.prototype) 

// prototyoe object contains methods ,all the objects linked to prototype object can use

//4. function automatically returns  {}

const jessica = new PersonCl('Jessica Davis', 1996);

console.log(jessica.__proto__);
console.log(jessica);
console.log(jessica.age);

jessica.calcAge();

console.log(jessica.__proto__ == PersonCl.prototype);

//we can also manually add to the prototype object

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };

jessica.greet();

//1.classes are not hoisted

//fn decalaration are hoisted which means we can use them before they are declared in the code

//2.Class are first class citizens(since they are spl kind of fns they can be passed in as an argument and also can be returned in an fn)

//3.Classes are executed in strict mode

//geters and setter

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

//.latest we call it as if its an property
console.log(account.latest);

//its not mandatory to put both set and get methods

//.latest we call it as if its an property\

account.latest = 50;

console.log(account.movements);


*/
//classes do have getters and setters

//Object.create (least used way)  (there's still the idea of protypal inheritance)
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  },
};

const steven = Object.create(PersonProto); //__proto__ of steven=PersonProto.Prototype(empty object is created and linked with PersonProto Prototype)
//since the link has been created steven object will have acces to methods in prototyppe fn
steven.name = 'Steven';
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);

sarah.calcAge();
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const ford = new Car('Ford', 120);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;

console.log(ford);

const Person = function (fullName, birthYear) {
  console.log(this);
  //Instance properties
  this.fullName = fullName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//linking prototypes
//empty object of Student.prototype is created, and linked to Person.prototype
Student.prototype = Object.create(Person.prototype); //i.e student.prototype.__proto__=Person.prototype
//since Student.prototype is linked with Person.protoype by mistake the constructor also will be set to Person implicitly
//hence we need to fix it
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I Study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'computer science');

mike.introduce();
mike.calcAge();
console.dir(mike);

// : JavaScript provides standard methods like Object.getPrototypeOf() and Object.setPrototypeOf() to work with prototypes. These methods are recommended over using __proto__
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// class EV {
//   constructor(make, speed, charge) {
//     // Car(this, make, speed);
//     this.charge = charge;
//   }
// }
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
//ev.prototype is an object and since each object should be associated with a prototype object
//ev.prototype is linked to an associat car.prototype
EV.prototype = Object.create(Car.prototype);
//since EV.prototype is linked with CAR.protoype by mistake the constructor also will be set to CAR implicitly
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.dir(EV.prototype.constructor);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

//inheritance using classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName; //this assignment triggers the fullName setter
    this.birthYear = birthYear;
  }

  //Instance methods
  //all methods written outside constructor will be on prototype of object of Personcl class and not on the object itself
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  //this getter method is also stored in the prototype object

  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that already exists

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  //static method
  static hey() {
    console.log(`Hey there`);
  }
}
// StudentCl.Prototype.__proto__=PersonCl.prototype  (bts extends)
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //     that if you do not need any new properties,

    // then you don't even need

    // to bother writing a constructor method in the child class.
    /////////////

    // PersonCl.call(this, fullName, birthYear); //not used in classes

    //similar to that we use super

    //always need to happen first
    //     And that's because this call to the super function

    // is responsible for creating

    // the this keyword in this subclass.
    super(fullName, birthYear);

    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this._fullName} and I Study ${this.course}`);
  }
  calcAge() {
    console.log(`I am ${2037 - this.birthYear} years old`);
  }
}
// calcAge fn appears first in prototype of StudentCl hence it the old calcAge fn will not be called if its a student Object
const martha = new StudentCl('MArtha jones', 2012, 'computer science');
// const martha = new StudentCl('MArtha jones', 2012, 'computer science');
console.log(martha);
console.log(martha.introduce());
martha.calcAge();


*/
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I Study ${this.course} `);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'compputer science');

jay.introduce();
jay.calcAge();

//encapsulation is just faked
//the property or method which has to be protected shoudl start with uderscore
//by doing this we are aware that this is a protected field and we should change it

class Account {
  #movements = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //protected
    this.#movements = [];
    this.locale = navigator.language;
    console.log('Thanls for opening the account');
  }

  //PuBlic Interface

  getMovements() {
    return this.#movements;
  }
  getPin() {
    return this._pin;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('ROBIN', 'EUR', 1111);
console.log(acc1);

acc1.deposit(100);

acc1.withdraw(200);
console.log(acc1);

acc1.requestLoan(1000);
// acc1.approveLoan(1000);

console.log(acc1);

console.log(acc1.pin);

console.log(acc1.getMovements());

//why we implement encapsulation
//to prevent code from outside of class to accidentally manipulate data inside the class
