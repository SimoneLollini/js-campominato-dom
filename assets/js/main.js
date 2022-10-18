// Consegna
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


const field = document.querySelector('.field');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    field.innerHTML = '';
    const cellNumber = 100;
    generateCells(field, cellNumber);
    generateBombs(1, 100)
});


function generateCells(parentElement, cellsNumber) {
    for (let i = 0; i < cellsNumber; i++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.innerText = i + 1;
        parentElement.append(cellElement);
    }

    const cellSelector = document.querySelectorAll('.cell');
    for (let i = 0; i < cellSelector.length; i++) {
        const singleCell = cellSelector[i]
        singleCell.addEventListener('click', function () {
            singleCell.classList.add('active');
            console.log(singleCell.innerHTML);
        })
    }
}

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.


/*
*/
function randomBombNumber(min, max) {
    return Math.ceil(Math.random() * (max - min));
}
// console.log(randomBombNumber(1, 100));


function generateBombs(min, max) {
    const bombs = []
    while (bombs.length !== 16) {
        const bombNumber = randomBombNumber(min, max)
        if (!bombs.includes(bombNumber)) {
            bombs.push(bombNumber)
        }
    }
    console.log(bombs);
    return bombs
}