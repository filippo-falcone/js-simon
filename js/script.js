/*
// Creo un array 'guessNumbers' di 5 numeri casuali
// Stampo sul DOM l'array
// Creo un setTimer di 30000 ms in cui
// - Pulisco il dom
// Creo un setTimer di 31000 ms in cui
// - Creo un array 'enteredNumbers'
// - Chiedo all'utente di inserie 5 numeri
// - Inserisco questi numeri in 'enteredNumbers'
// -- Se i numeri inseriti sono inclusi nell'array 'guessNumbers' e non sono già presenti nell'array
// --- li pusho
// Stampo all'utente quanti numeri numeri ha indovinato e quali sono
*/
/* MATERIAL */
const domText = document.querySelector('#number');
const guessNumbers = generatorRndNumbArray(5, 1, 100);

/* BODY */
domText.innerHTML = guessNumbers;
setTimeout(cleanDom, 30000);
setTimeout(playGame, 31000);

/* FUNCTIONS */
// Funzione richiamata in un setTimeout che pulisce il DOM
function cleanDom() {
    domText.innerHTML = '';
}

// Funzione richiamata in un setTimeout che fa partire il gioco
function playGame() {
    const enteredNumbers = [];
    for (let i = 0; i < 5; i++) {
        const userNumber = parseInt(prompt('Inserisci un numero:'));
        if (isNaN(userNumber)) {
            alert('Il numero non è valido');
            i--;
        } else if (guessNumbers.includes(userNumber) && !enteredNumbers.includes(userNumber)) {
            enteredNumbers.push(userNumber);
        }
    }
    domText.innerHTML = `Hai indovinato ${enteredNumbers.length} numeri: ${enteredNumbers}`;
}

// Funzione che genera un array di numeri casuali unici
// arrayLength: elemento numerico che rappresenta la lunghezza massima dell'array
// min: elemento numerico che rappresenta il numero minimo dell'intervallo dei numeri casuali
// max: elemento numerico che rappresenta il numero massimo dell'intervallo dei numeri casuali
// return: rndArray array di numeri casuali
function generatorRndNumbArray(arrayLength, min, max) {
    let rndArray = [];
    while (rndArray.length < arrayLength) {
        const rndNumber = getRndInteger(min, max);
        if (!rndArray.includes(rndNumber)) {
            rndArray.push(rndNumber);
        }
    }
    return rndArray;
}

// Funzione che genera numeri random
// Presa da w3schools
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}