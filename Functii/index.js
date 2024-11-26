// Functii - bloc de cod reutilizabil
/*
Caracteristici principale ale unei funcții:
Definire: O funcție este definită o singură dată și poate fi apelată ori de câte ori este necesar.
Parametri: Funcțiile pot primi date de intrare numite parametri; putem trimite 0, 1 sau mai multi parametri.
Return: O funcție poate întoarce o valoare folosind cuvântul cheie return.(optional)
Invocare: O funcție este executată atunci când este apelată. 
Cum funcționează return?
-Întoarce o valoare către apelant:
Putem folosi return pentru a transmite un rezultat dintr-o funcție către locul unde a fost apelată.
-Încheie execuția funcției:
Odată ce return este întâlnit, funcția nu mai continuă să execute codul rămas.*/

// declarare, definire functie
// named function
function myFunc(a) {
    console.log(a);
}

// apelare
myFunc(3);

// Sa se defineasca o functie care determina daca numarul trimis ca parametru este o putere a lui 2.
// Impartim numarul succesiv la 2 atat timp cat acesta se divide cu 2. Ulterior, verificam valoarea numarului:
// Daca este == 1, numarul este o putere a lui 2, altfel nu este.
// a = 8 => 4 2 1
// a = 10 => 5 
function isPowTwo(a) {
    console.log(a);
    while(a%2 == 0) {
        a = a/2;
    }

    if (a == 1)
        return true;
    return false;
}

let result = isPowTwo();
console.log(result);

// anonymous function
const powOfTwo = function(a) {
    console.log(a);
    while(a%2 == 0) {
        a = a/2;
    }

    if (a == 1)
        return true;
    return false;
}

console.log(powOfTwo(24));

// arrow function
const add = (a, b) => a+b;
console.log(add(3, 4));

// IIFE(Immediately Invoked Function Expressions)
// IIFE este acronimul pentru Immediately Invoked Function Expression. Acesta reprezintă o funcție în JavaScript care este definită și executată imediat după ce a fost creată.
/*
function myFunc(a) {
    console.log(a);
}

myFunc(3);
 */

(function myFunc() {
    console.log('Hi!');
})();

// Sa se defineasca un arrow function care primeste ca parametru un numar natural si injumatateste cifrele pare ale nr.
// x = 23766 => se obtine 13733
// 3 33 733 3733 13733
let divide = x => {
    let y = 0;
    let p = 1;

    while(x > 0) {
        let digit = x%10;
        if (digit%2 == 0)
            y = digit/2*p + y;
        else
            y = digit*p + y;

        p = p*10;
        x = Math.floor(x/10);
    }

    return y;
}

console.log(divide(23766));

// Sa se defineasca o functie anonima care determina cifra maxima a unui numar natural x dat ca parametru si de cate ori 
// apare aceasta cifra in scrierea numarului x.
// ex x = 32588 => cifra 8 apare de 2 ori
 let maxDigit = function(x) {
    let max = 0;
    let frequency = 0;
    while (x>0) {
        if (x%10 > max) {
            max = x%10;
            frequency = 1;
        } else if (x%10 == max) {
            frequency++;
        }
        x = Math.floor(x/10);
    }

    console.log(`cifra ${max} apare de ${frequency} ori`);
 }

 maxDigit(32588);

 // callback functions
 /*
   O funcție callback este o funcție care este trecută ca argument unei alte funcții și care este apelată
   mai târziu în cadrul funcției respective.
  */

function calculateAreaCallback(a, b, c, shape) {
    let result = shape(a, b, c); // triangle(a, b, c)
    console.log(result);
}

 let triangle = function(a,b,c) {
    return a*b/2;
 }

 let rectangle = function(a, b, c) {
    return a*b;
 }

 let trapezoid = function(a, b, c) {
    return (a+b)*c/2;
 }

 calculateAreaCallback(5, 6, 7, triangle);