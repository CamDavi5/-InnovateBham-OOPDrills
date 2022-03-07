/*let person1 = {
    name: "Sherry",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}`);
    },

}
let person2 = {
    name: "Wayne",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}`);
    },

}
let person3 = {
    name: "Kala",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}`);
    },

}
let person4 = {
    name: "Bobby",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}`);
    },

}
let person5 = {
    name: "Zowie",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}`);
    },

}
person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();*/

/*function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}
Person.prototype.greeting = function() {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`)
}
let person1 = new Person('Sherry', 'Birmingham', "60");
let person2 = new Person('Wayne', 'Birmingham', "63");
let person3 = new Person('Kala', 'Hoover', "36");
let person4 = new Person('Bobby', 'Hoover', "38");
let person5 = new Person('Zowie', 'Birmingham', "14");
person1.greeting();
person2.greeting();
person3.greeting();
person4.greeting();
person5.greeting();*/

/*class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    newGreeting() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`)
    }
}
let person1 = new Person('Sherry', 'Birmingham', "60");
let person2 = new Person('Wayne', 'Birmingham', "63");
let person3 = new Person('Kala', 'Hoover', "36");
let person4 = new Person('Bobby', 'Hoover', "38");
let person5 = new Person('Zowie', 'Birmingham', "14");
person1.newGreeting();
person2.newGreeting();
person3.newGreeting();
person4.newGreeting();
person5.newGreeting();*/

class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }

    aboutVehicle() {
        console.log(`This vehicle was made by ${this.manufacturer} and has ${this.wheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, wheels, doors) {
        super(manufacturer, wheels);
        this.doors = doors;
        this.truckBed = true;
    }
    aboutVehicle() {
        console.log(`This truck was made by ${this.manufacturer} and has ${this.wheels} wheels, along with ${this.doors} doors and a truck bed.`);
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, wheels, size, mpg) {
        super(manufacturer, wheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This sedan was made by ${this.manufacturer} and has ${this.wheels} wheels, along with a miles per gallon of ${this.mpg} and is ${this.size} size.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, wheels, doors) {
        super(manufacturer, wheels);
        this.handlebars = true;
        this.doors = doors;
    }
    aboutVehicle() {
        console.log(`This motorcycle was made by ${this.manufacturer} and has ${this.wheels} wheels, along with handlebars and ${this.doors} doors.`);
    }
}
let newVehicle = new Vehicle("Tesla", "4");
let newTruck = new Truck("Ford", "4", "2");
let newSedan = new Sedan("Nissan", "4", "medium", "14");
let newMotorcycle = new Motorcycle("Harley Davidson", "2", "0");
newVehicle.aboutVehicle();
newTruck.aboutVehicle();
newSedan.aboutVehicle();
newMotorcycle.aboutVehicle();