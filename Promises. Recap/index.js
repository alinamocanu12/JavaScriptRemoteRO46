// crearea unui promise
/*function asyncOperation() {
    return new Promise((resolve, reject) => {
        let success = Math.random(); // [0, 1)
        setTimeout(() => {
            if (success)
                resolve('Success!!');
            else
                reject('Oops! An error occured');
        }, 2000);
    });

}

// consumarea unui promise
asyncOperation()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Reached finally block!');
    })

let x = 12;
console.log(x*x);
*/


//Dat un array de numere întregi și un target, găsește 
//două numere din array care adunate dau targetul. Returnează cele doua elemente.
// EX: [11, 15, 7, 4, 2, 6] target = 9 ==> 7 si 2

let twoSum = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return {t1: arr[i], t2: arr[j]};
            }
        }
    }

    return {};
}

console.log(twoSum([11, 15, 7, 4, 2, 6], 9));

// cautare liniara
// [34, 2, 50, 65, 8]

function liniarSearch(arr, target) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == target)
            return true;
    return false;
}

console.log(liniarSearch([34, 2, 50, 65, 8], 50));
console.log(liniarSearch([34, 2, 50, 65, 8], 9));

//  [2, 8, 10, 23, 34, 50, 65]  9
// l = 0 , r = 6, m = 3 => [2, 8, 10]
//l = 0, r = m-1 = 2, m = 1 => [10]
// l = 2, r = 2, m = 2 => []
// l = 2, r = 1, m = 1



function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if (arr[mid] === target)
            return arr[mid];

        if (target < arr[mid])
                right = mid - 1;
        if (target > arr[mid])
                left = mid  + 1;
    }

    return -1;
}

console.log(binarySearch([2, 8, 10, 23, 34, 50, 65], 8));
console.log(binarySearch([2, 8, 10, 23, 34, 50, 65], 9));

// loScrie o funcție care afișează numerele de la 1 la 100. Dar:

//Pentru numerele divizibile cu 3, afișează "Fizz".
//Pentru numerele divizibile cu 5, afișează "Buzz".
//Pentru numerele divizibile cu ambele, afișează "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++)
        if (i%3 == 0 && i%5 == 0)
            console.log('FizzBuzz');
        else if (i%3 == 0)
            console.log('Fizz');
        else if (i%5 == 0)
            console.log('Buzz');
        else
            console.log(i);
       
}

//fizzBuzz();

// Scrie o funcție care inversează un string utilizand o metoda iterativa
// hello => olleh slice(0, 2) => he

function reverseStringIterativ(str) {
    let reversed = "";
    for (let i = str.length - 1; i >=0; i--)
        reversed = reversed + str[i];

    return reversed;
}

function reverseStringRecursiv(str) {
    // cazul de baza
    if (str.length <= 1)
        return str;

    // cazul recursiv
    return str[str.length-1] + reverseStringRecursiv(str.slice(0, -1));
}

console.log(reverseStringIterativ('hello'));
console.log(reverseStringRecursiv('hello'));



