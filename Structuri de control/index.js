/*
1. Structura de decizie simpla
if (expresie)
    instr1;
[else
    instr2;]

Instrucţiunea evaluează expresia logică, dacă este adevărată (1) execută instr1 iar dacă
nu, execută instr2 dacă ramura de else este prezentă, iar în caz contrar nu execută
nimic.
In cazul in care expresia logica este adevarata si urmeaza sa se execute mai mult de o instructiune,
acoladele sunt necesare pentru a marca blocul de instructiuni, altfel le putem omite.

    if (expr) {
        instr1;
        instr2;
    }

    let x = 12;
 */
// maximul dintre doua numere
/*let x = 12, y = 54;
let max = 0;

if (x > y) {
    max = x;
} else {
    max = y;
}
console.log(max);
*/

// maximul dintre trei numere
let a = 20, b = 5, c = 97;
let max1 = 0;
// comparam primele doua si determinam maximul
if (a > b) {
    max1 = a;
} else {
    max1 = b;
}

// determin maximul dintre c si max1
if (c > max1) {
    max1 = c;
}

console.log(max1);

// ******************INSTRUCTIUNI REPETITIVE******************
// while - structura repetitiva cu test initial
/*

 while(expr) {
    instr1;
    instr2;
}

Pas 1: se evaluează expresia;
Pas 2: 
-dacă valoarea expresiei este fals(0), se iese din instrucţiunea while
-daca valoarea expresiei este adevărat(1), se execută blocul de instructiuni, apoi se
revine la Pas 1.

Instrucţiunea se execută repetat, cât timp valoarea expresiei este adevărat
(1). Pentru ca ciclul să nu fie infinit, este obligatoriu ca instrucţiunea care se
execută să modifice cel puţin una dintre variabilele care intervin în expresie, astfel
încât aceasta să poată lua valoarea fals(0).
Dacă expresia are de la început valoarea fals(0), instrucţiunea nu se
execută nici măcar o dată.
 */



/*let x = 9;
/*while (x > 0) {
    console.log(x);
    x--;// x = x-1;
}
//9 + 8 + 7 +...+1
let sum = 0;
while (x > 0) {
    sum += x;
    x--;// x = x-1;
}
console.log(sum);
*/

// ***prelucrarea cifrelor unui numar***
// pentru un numar x, sa se calculeze suma obtinuta din cifrele numarului
//ex x = 3276 sum = 6+7+2+3 = 18
/*let x = 3276;
let y = x;
let sum = 0;
while (x > 0) {
    let digit = x%10; // ultima cifra a unui numar;
    sum += digit;
    x = Math.floor(x/10);
} 

console.log(sum);

//calculati produsul cifrelor dintr-un numar dat
// ex x = 3276 p = 6*7*2*3 
let p = 1;
while (y > 0) {
    let digit = y%10;
    p *= digit;
    y = Math.floor(y/10);  
}
console.log(p);*/

//---------------------------------------------------
// Sa se afiseze incepand cu cifra unitatilor cifrele unui numar natural x care sunt divizibile cu 3. 
// In cazul in care numarul nu contine cifre divizibile cu 3 se va afisa mesajul "NU EXISTA"
// Ex pentru x = 459026 se obtine: 6 0 9
// pentru x = 2557 se obtine: "NU EXISTA"

// parcurgem cifrele numarului incepand cu cifra unitatilor. Daca cifra curenta este divizibila cu 3,
// o vom afisa si vom modifica variabila comutator ( trebuie initializat cu false)
// la finalul instructiunii repetitive, daca variabila comutator este fals, inseamna ca nu avem cifre div cu 3
// si vom afisa un mesaj corespunzator.
//-----------------------------------------------------

// calculati inversul unui numar
// x = 62921 inversul lui x => 12926
// x = 12321 inversul lui x => 12321
// numar palindrom ==> x == invers(x)
/*let x = 12321, y = 0, z = x;
while (x > 0) {
    let digit = x%10;
    y = y*10 + digit; 
    x = Math.floor(x/10);
}
console.log(y); //12926
console.log(x); // 0

if (z == y)
    console.log('PALINDROM');
else
    console.log('NU ESTE PALINDROM');
*/


// cel mai mare divizor comun a doua numere
// cmmdc(ab) = c, c | a && c | b && c maximal
//cmmdc(10, 45) = 5
/*
x = 45
y = 10

x = 35;
y = 10;

x = 25
y = 10

x = 15
y = 10;

x = 5
y = 10;

x = 5;
y = 5;
 */
let x = 45, y = 10;
while (x != y) {
    if (x > y)
        x = x - y;
    else
        y = y - x;
}
console.log(x); 

// ****************************************************
//do..while  instructiune repetitiva cu test final
/*
do {
    instr1;
    instr2;
} while(expr)

Pas 1: se execută instrucţiunea;
Pas 2: se evaluează expresia;
Pas 3:dacă valoarea expresiei este fals(0) se iese din instrucţiunea repetitivă;
dacă valoarea expresiei este adevărat(1), se revine la Pas 1.
Observații:
1. Instrucțiunea do..while se execută repetat, cât timp valoarea expresiei
este adevărat(1). Pentru ca ciclul să nu fie infinit, este obligatoriu ca
instrucţiunea care se execută să modifice cel puţin una dintre variabilele care
intervin în expresie, astfel încât aceasta să poată lua valoarea fals(0).
3. Deoarece evaluarea expresiei în ambele repetitive se face după execuţia
instrucţiunii, instrucţiunea se execută cel puţin o dată.
*/

//**************************************************************** 
//INSTRUCTIUNE REPETITIVA CU CONTOR (FOR)
/**
 for (expresie1; expresie2; expresie3)
        instr;
1. se evalueaza expresia1. aceasta se evalueaza o singura data, de obicei reprezinta intializarea
variabilei contor. putem declara aici variabile cu let si var
2. Se evalueaza expresia2. Aceasta este o expresie de test care determina (Sau nu) executia instructiunii
subordonate. Deci, daca expresie2 este evaluata la 0, for ul se incheie, altfel se trece la pasul 3.
3. se executa instr
4. se evalueaza expresia3. in mod uzual reprezinta incrementarea contorului.
 */

 /*let n = 9;
 for (let i = 1; i <= n; i++)
    console.log(i);

for (let i = n; i >= 1; i--)
    console.log(i);

for (let i = 1; i <= n; i++)
    if (i%2 == 0)
        console.log(i);

for (let i = 2; i <= n; i=i+2)
    console.log(i);
*/

// determinati daca un numar este prim
let n = 24;
let ok = 1;
for (let i = 2; i <= n/2; i++)
    if (n%i == 0) {
        ok = 0;
        break;
    }

if (ok == 1)
    console.log('PRIM');
else
    console.log('NU E PRIM');

// calculati suma numerelor care nu sunt divizibile cu 3 dintr un vector dat 
// ex: numbers = [1, 3, 5, 6, 8, 9, 12, 15, 20, 25]; => 59








