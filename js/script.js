/*


Esercizio di oggi: Griglia Campo Minato


Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
 


 `<div class="square">1</div>`



Quando premo play l'utente inizia a giocare
easy = 100
normal = 81
hard = 49



width: calc(100% / 10);
height: calc(100% / 10);


*/

const levelForm = document.getElementById('levelForm');
levelForm.addEventListener('submit', play);

function drawSquare(index, numSquares) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${numSquares})`;
    square.style.height = square.style.width;
    square.innerHTML = index;


    return square;
}
//funzionme per generare l'array delle bombe

function generateBombs(bombsnum, numsquares) {
    const bombs = [];

    console.log(bombs);
    while (bombs.length < bombsnum) {
        const bomb = getRndNumber(1, numsquares);
        if (bombs.indexOf(bomb) === -1)
         // if che verifica che all'interno dell'array sia presente l'indice
            bombs.push(bomb);
    }

    return bombs;
}

function play(e) {
    e.preventDefault();

    const playground = document.getElementById('playground');
    playground.innerHTML = '';
    const NUM_BOMBS = 16;
    //prendo il livello
    const level = document.getElementById('level').value;
    //console.log(level);

    //Imposto il numero di celle a seconda del livello
    let squareNumbers;

    switch (level) {
        case 'easy':
            squareNumbers = 100;
            break;
        case 'normal':
            squareNumbers = 81;
            break;
        case 'hard':
            squareNumbers = 49;
            break;

    };
    //console.log(squareNumbers);

    //Determino il numero di celle per lato
    let squareForRow = Math.sqrt(squareNumbers);

    //Generare numeri casuali

    const bombs = generateBombs(NUM_BOMBS, squareNumbers);
    //console.log(bombs);
    //Ciclo per il numero di celle e genero la cella
    for (let i = 1; i <= squareNumbers; i++) {
        const square = drawSquare(i, squareForRow)
        //aggiunto evento click per colorale le square clickate
        square.addEventListener('click', function () {
            square.classList.add('squareSafe')
        });
        playground.appendChild(square);
    }




}