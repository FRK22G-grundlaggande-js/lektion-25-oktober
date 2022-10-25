const inputElem = document.querySelector('#number');

/**
 * Tar två siffror som argument och returneras dess summa
 */
function add(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;

    return sum; // Returnera värdet i variabeln sum
}

function showSum(sum) {
    console.log('Summan blev:', sum);
}

const mySum = add(5, 5);
showSum(mySum); // Skickar med värdet som argument i variabeln mySum
const newSum = add(20, 20);
showSum(newSum);