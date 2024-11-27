// JS Objects
// colectie de perechi de tipul cheie-valoare
// object literal notation
const person = {
    firstName: 'John', //field, property
    lastName: 'Doe',
    age: 24,
    sayHello: function() {console.log('Hi!')} // method
};

console.log(person);
console.log(person.age);
console.log(person['age']);
person.sayHello();

person.age = 43;
console.log(person.age);
person.sayBye = function() {console.log('Bye');};

delete person.age;
console.log(person);

// this
console.log(this);
const triangle = {
    edgeA: 4,
    edgeB: 5,
    edgeC: 6,
    whoIsThis: function() {
        console.log(this);
    }
}

triangle.whoIsThis();
triangle.calculatePerimeter = function() {
    return this.edgeA + this.edgeB + this.edgeC;
}

console.log(triangle.calculatePerimeter());

// price - percentage*0.01*price
const product = {
    name: 'Sweater',
    price: 45,
    color: 'white',
    calculateDiscount: percentage => {
        console.log(product.price); //45
        console.log(this.price); //undefined ==> pentru ca this este obiectul window
        return product.price - percentage*0.01*product.price;
    }

}

console.log(product.calculateDiscount(5)); // NaN

// constructor functions
// clasa - sablon pentru categorie de obiecte
// obiect - instanta a unei clase
function Book(title, noOfPages, author, publishYear) {
    this.title = title;
    this.noOfPages = noOfPages;
    this.author = author;
    this.publishYear = publishYear;
}

let book1 = new Book('Fratii Karamazov', 867, 'Dostoievski', 1840); // obiect
let book2 = new Book('Metamorfoza', 56, 'Franz Kafka', 1790);
console.log(book1);

/*****************************************************************************
Create an object: a car. It has some properties: the brand, the model, the start price, the end price, the age. Write some functions which operate on this object:

A constructor function which creates a Car object and fills it with some initial data.
A method, which computes the end price, by decreasing the start price by 1000 for every year of the car's age.
A method, increasing the start price by a given value.
A method, checking whether the end price is in the given range.
A method, copying the object (so that we have two similar cars, not just one).
*/
function Car(brand, model, startPrice, age) {
    this.brand = brand;
    this.model = model;
    this.startPrice = startPrice;
    this.age = age;
    this.endPrice = 0;

    this.computeEndPrice = function() {
        this.endPrice = this.startPrice - this.age*1000;
    }

    this.increaseStartPrice = function(amount) {
        this.startPrice = this.startPrice + amount;
    }

    this.checkRange = function(a, b) {
        if (this.endPrice >= a && this.endPrice <= b)
            return true;
        return false;
    }

    this.copy = function() {
        let copyObj = new Car(this.brand, this.model, this.startPrice, this.age);
        copyObj.endPrice = this.endPrice;
        return copyObj;
    }
}

let car1 = new Car('BMW', 'Seria 5', 50000, 10);
let car2 = new Car('Audi', 'X5', 60000, 5);
car1.computeEndPrice();
car2.computeEndPrice();
console.log(car1.endPrice);
console.log(car2.endPrice);

car1.increaseStartPrice(3000);
car2.increaseStartPrice(5000);
console.log(car1.startPrice);
console.log(car2.startPrice);

console.log(car1.checkRange(32000, 78000));
console.log(car1.checkRange(60000, 78000));

let copyObj = car1.copy();
copyObj.age = 15;
console.log(copyObj);
console.log(car1);

car1.age = 20;
console.log(copyObj);
console.log(car1);

// transmitere prin referinta
let car3 = copyObj; 
car3.brand = 'Dacia';
console.log(car3);
console.log(copyObj);

//---------------------------------------
/*
Create a JavaScript object, representing a student.
The student has a: name, surname, age.
The student has also an array of courses.
Each course has a name, the number of hours and a short description.
Write a function that will create a sample Course object and fill it with some data.
Write a function that will create a sample Student object and fill it with some data.
Write another function that will copy the previously created Student and make a new one.
Check if the student item can be properly copied - including his courses (the change in the copied student's courses should not affect the original ones schedule)!
 */

function Course(name, noOfHours, description) {
    this.name = name;
    this.noOfHours = noOfHours;
    this.description = description;
}

function Student(firstName, lastName, age, courses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.courses = courses;
}

let course1 = new Course('Math', 8, 'Geometry');
let course2 = new Course('Chemistry', 3, 'Molecular Chemistry');
let courses = [];
courses.push(course1);
courses.push(course2);

let student1 = new Student('Mike', 'Jhonson', 17, courses);

function cloneStudent(oldStudent) {
    let newCourses = [];
    for (let i of oldStudent.courses) {
        let course = new Course(i.name, i.noOfHours, i.description);
        newCourses.push(course);
    }
    let newStudent =  new Student(oldStudent.firstName, oldStudent.lastName, oldStudent.age, newCourses);
    return newStudent;
}

let student2 = cloneStudent(student1);
student2.courses.push(new Course('Literature', 5, 'Universal literature'));
console.log(student2);
console.log(student1);

student2.courses[0].noOfHours = 10;
console.log(student2);
console.log(student1);



// transmitere prin valoare
let x = 1;
let y = x;
console.log(x, y);

y = 2;
console.log(x, y);