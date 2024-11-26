// Recursivitate
// definiti o functie care calculeaza factorialul unui numar
// n = 5 => n! = 120

function factIterativ(n) {
    let p = 1;
    for (i = 1; i <= n; i++)
        p = p*i;

    return p;
}

console.log(factIterativ(5));

// Zona 1: n = 5, f = 5 * factRecursiv(4) = 5 * 24 = 120
// Zona 2: n = 4, f = 4 * factRecursiv(3) = 4 * 6 = 24
// Zona 3: n = 3, f = 3 * factRecursiv(2) = 3 *2 = 6
// Zona 4: n = 2, f = 2 * factRecursiv(1) = 2 * 1 = 2
// Zona 5: n = 1, f = 1 * factRecursiv(0) = 1 * 1 = 1
// Zona 6: n = 0 f = 1
function factRecursiv(n) {
    // cazul de baza
    if (n == 0)
        return 1;

    // cazul recursiv n! = n * (n-1)!
    return n * factRecursiv(n-1);
}

console.log(factRecursiv(5));

// definiti o functie care primeste doi parametri, a si b nr naturale
// si calculeaza a^b
// Iterativ:a = 2, b = 3 => 2*2*2 = 8
// 2 4 8
function powIterativ(a, b) {
    let result = 1;
    while (b > 0) {
        result = result * a;
        b--;
    }

    return result;
}
console.log(powIterativ(2, 3));

// Recursiv: a^n = a^1 * a^(n-1) = a^(1+n-1)
// Zona 1: a = 2, b = 3, f = 2 * powRecursiv(2, 2) = 2 * 4 = 8
// Zona 2: a = 2, b = 2, f = 2 * powRecursiv(2, 1) = 2 * 2 = 4
// Zona 3: a = 2, b = 1, f = 2 * powRecursiv(2, 0) = 2 * 1 = 2
// Zona 4: a = 2, b = 0, f = 1
function powRecursiv(a, b) {
    // cazul de baza
    if ( b == 0)
        return 1;

    // cazul recursiv
    return a * powRecursiv(a, b-1);
}

console.log(powRecursiv(2, 3));

//-------------------------------------------------
// calcularea unui termen dintr o progresie aritmetica
// nerecursiv : an = a1 + (n-1)*r
// a1 = 3 , r = 2 , a2 = 3 + 2 = 5, a3 = 5 + 2 = 7

// recursiv
// an = a(n-1) + r
//-----------------------------------------------------

// sirul lui fibonacci
// 1 1 2 3 5 8 13 21
// fn = f(n-1) + f(n-2)

// functie care calculeaza al n-lea termen din sirul lui fibonacci
// n = 4 => 3
// Zona 1: n = 4, f = fiboRecursiv(3) + fiboRecursiv(2) = 2 + 1 = 3
// Zona 2: n = 3, f = fiboRecursiv(2) + fiboRecursiv(1) = 1 + 1 = 2
// Zona 3: n = 2, f = 1
// Zona 4: n = 1, f = 1

function fiboRecursiv(n) {

    // cazul de baza
     if (n == 1 || n == 2)
        return 1;

    // cazul recursiv
    return fiboRecursiv(n-1) + fiboRecursiv(n-2);
}

console.log(fiboRecursiv(4));