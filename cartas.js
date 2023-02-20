import { diccionarioValores, palos } from "./valoresCartas.js";

/*
    Funcion que crea todas las cartas de un palo.
    Loopea y asigna un diccionario con todos los valores poniendole el numero+nombre de la carta y el valor que corresponde.
*/
function crearCartasPalo(palo){
    const cartasMismoPalo = [];
    for(let i = 1; i < 13; i++){
        if (i === 8 || i === 9)
            continue;
        let numeroYPalo = `${i} ${palo}`;
        let card = {[numeroYPalo] : diccionarioValores[i]};
        // card = {2 : 50}      
        cartasMismoPalo.push(card);
    }
    
    if(palo === "Espada"){
        cartasMismoPalo[0]["1 Espada"] = 100;
        cartasMismoPalo[6]["7 Espada"] = 80;        
    }
    else if(palo === "Basto"){
        cartasMismoPalo[0]["1 Basto"] = 90;
    }
    else if(palo === "Oro"){
        cartasMismoPalo[6]["7 Oro"] = 70;
    }
    return cartasMismoPalo;
}
/*
    Funcion que crea el mazo, llama la funcion crearCartasPalo 4 veces una vez por cada palo
*/
export const  crearMazo = () => {
    let mazo = [];
    palos.forEach(element => {
        mazo = mazo.concat(crearCartasPalo(element));
    });
    return mazo;
}
/*
    Mezcla el deck agarrando carta por carta y poniendola en otro lugar.
*/
export function mezclar(deck) {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // 
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
};

/*
    Reparte cartas, asigna 6 cartas de arriba para repartirselas a los jugadores.
*/
export function repartirCartas(deck) {
    let cartas = [];
    for (let i = 0; i < 6; i++){
        cartas[i] = deck.pop();
}
    return cartas;
}
