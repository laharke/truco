import { crearMazo, mezclar, repartirCartas } from "./cartas.js";
//1 Son disti
//cartasmismo [1copa:] 
let player1cards = [];
let player2cards = [];



/*
    Aca llamamos a crear mazo
    repartimos las cartas
*/
let mazo = crearMazo();
mazo = mezclar(mazo);
let cartasARepartir = repartirCartas(mazo);

/*
    Asignamos las cartas a los jugadores
*/
function asignarCartas(player1cards, player2cards) {
    for (let i = 0; i < 6; i+= 2){
        player1cards.push(cartasARepartir[i]);
    }

    for (let i = 1; i < 6; i+= 2){
        player2cards.push(cartasARepartir[i]);
    }
}

asignarCartas(player1cards, player2cards);
console.log(cartasARepartir);
console.log(player1cards, player2cards);

/*  

*/
