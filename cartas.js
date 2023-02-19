import { diccionarioValores, palos } from "./valoresCartas.js";

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

export const  crearMazo = () => {
    let mazo = [];
    palos.forEach(element => {
        mazo = mazo.concat(crearCartasPalo(element));
    });
    return mazo;
}

export function mezclar(deck) {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // 
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
};