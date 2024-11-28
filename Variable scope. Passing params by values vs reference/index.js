console.log(a); // undefined, does not cause ReferenceError due to hoisting
var a = 16; // declaration will be moved at the top of the scope
console.log(a); //16

// var - function scope
var b = 20;
function myFunc() {
   var b = 22;

    if (true) {
        var b = 24;
        console.log(b); // 24
    }
    console.log(b); // 24
}
myFunc();
console.log(b); // 20

// let - block scoped
let c = 40;
let d = 42;
function myFunc2() {
    let c = 44;

    if(true) {
        let c = 46;
        console.log(c); // 46
        console.log(d); // 42
    }
    console.log(c); // 44
}
myFunc2();
console.log(c); // 40

//console.log(e); throws ReferenceError because variable is accessed in temporal dead zone
let e = 2;

//--------------------

function testScope() {
    if(true) {
        var varVariabble = 'I am Var!';
        let letVariable = 'I am let!';
    }

    console.log(varVariabble); // I am Var!
    console.log(letVariable); // ReferenceError
}

//testScope(); 

/*
Definiti o functie care returneaza primul element par dintr-un array.
Rezultatul va fi retinut intr o variabila declarata la sfarsitul functiei.
Functia va returna valoarea acestei variabile.
 */

function getFirstEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            evenNr = arr[i];
            break;
        }
    }

    var evenNr;
    return evenNr;
}

console.log(getFirstEven([13, 21, 24, 45, 82, 44]));
console.log(getFirstEven([13, 21, 29, 45, 81, 49]));

//const x = 12;
// x = 13; ==> TypeError


function Book(title, author) {
    this.title = title;
    this.author = author;
}

const book1 = new Book('Meditatii', 'Marcus Aurelius');
book1.title = 'Ganduri catre sine insusi';
console.log(book1);

// book1 = new Book('Ganduri catre sine insusi', 'Marcus Aurelius');  ==> TypeError

/*const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
*/
// arr = [5, 6, 7]; ==> TypeError


/*
let x = 6;
let y = x;
y = 8;
console.log(x);
console.log(y);
function Person(firstName, lastName) {
    this.firtsName = firstName;
    this.lastName = lastName;
}

let boy = new Person('Ion', 'Popescu');
let girl = new Person('Anda', 'Ionescu');
/*
Atribuirea boy2 = boy copiază referința la același obiect. Nu creează un obiect nou.
Acum, atât boy cât și boy2 indică același obiect în memorie. Modificările făcute prin boy2 vor afecta și boy.
 */
//let boy2 = boy; 
// Crează un obiect complet nou în memorie, chiar dacă are aceleași valori ca girl.
//let girl2 = new Person('Anda', 'Ionescu'); 

/*
Diferențele dintre primitive și obiecte în memorie:
Primitive (ca x și y):
-Sunt stocate ca valori.
-Modificările aduse uneia nu afectează cealaltă.

Obiecte (ca boy și boy2):
-Sunt stocate prin referință.
-Modificările printr-o referință vor fi vizibile în toate celelalte referințe la același obiect.
 */



// TRANSMITEREA PARAMETRILOR PRIN VALOARE VS REFERINTA
// functie care returneaza inversul unui numar
/*
Tipurile de date primitive sunt transmise prin valoare;
Obiectele si array urile sunt transmise prin referinta;
 */
let y = 0;
let nr = 54461;
function reverseNumber(x) { // transmis prin valoare
    while (x > 0) {
        y = y*10 + x%10;
        x = Math.floor(x/10);
    }
    console.log(x); // 0
}
reverseNumber(nr);
console.log(nr); // 54461
console.log(y); // 16554

function transformArr(arr) { // transmis prin referinta
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1)
            arr[i] = arr[i] - 1;
    }

}

let arr = [1, 28, 44, 57, 2];
transformArr(arr);
console.log(arr);

function modifyTitle(obj, title) { // obj - transmis prin referinta
    obj.title = title;
}

let book2 = new Book('Test', 'Test Author');
modifyTitle(book2, 'Author');
console.log(book2);

// Definiti o functie care primeste ca parametru un array si returneaza true daca array ul e ordonat crescator
// Altfel, returneaza false.
// Ex [14, 25, 56, 78] ==> true
// Ex [19, 26, 11, 35] ==> false

/*
Parcurgem array-ul pana la penultimul element. La fiecare iteratie, verificam daca elementul curent  este > decat elementul din dreapta
Daca aceasta conditie este adevarata, returnam false. Un array este ordonat crescator daca oricare doua elemente alaturate sunt in ordine.
 */
const fun = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    return true;
};
  
console.log(fun([1, 5, 3, 4]));

/*
Dat un array de numere întregi și un target, găsește două numere din array care adunate dau targetul. Returnează indicii lor.
nums = [15, 11, 7, 2];
target = 9; ==> 2 + 7
 */