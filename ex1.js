"use strict";

let santeDeJonh = 10 // variable de la santé de jonh
let musiques = ["anissa de wejdene", "rosalia de luv resval", "le jour se leve de selug", "pluie de morphee", "kamado de luther"] // creation du tableau des 5 musiques possibler emise par la radio
let feuxrouges = 30 // nombre feux rouge
let nombretaxis = 0 // le nombre de changement de taxis

console.log("je doit prendre un taxi mais je ne vais pas me sentir bien si il met la musique anissa de wejdene");

for(let i=0;i<30;i++){ // creation de la boucle qui tourne 30 fois
    let musiqueradio = musiques[Math.floor(Math.random()*5)] // math random donne aleatoirement une musique entre les 5 
    if (musiqueradio==musiques[0]){ // pour savoir si la musique tirer est anissa de wejdene pour enlever 1 point de santé mentale
        santeDeJonh-- // la variable santeDeJonh -1  ( -- = -1 )
        nombretaxis++ // variable nombretaxis +1   ++ = +1
        console.log("NON pas cette musique changez je vous en prie "+musiqueradio+" il reste encore "+feuxrouges+" feux rouges avant d'arriver à la destination ma santé mentale est à "+santeDeJonh);
        if(santeDeJonh==0){ // si la variable santeDeJonh = 0  console.log ecrit explosion la boucle se stop
            console.log("explosion");
            break // marque la fin de la boucle le jeux prend fin
        }     
    }


    feuxrouges-- // chaque tour le nombre de feux rouge diminue de 1 
    if(feuxrouges!=0){ // si variable feuxrouges = 0 console.log montre le choix de musique et le nombre de feux rouge restant
        console.log("La musique à la radio est "+musiqueradio+" il reste "+feuxrouges+" feux rouges avant d'arriver à la bonne destination");
    }else{ // ecrit que jonh a pris un certain nombre de taxis et combien de santé mentale il lui reste a la fin
        console.log("super je suis arrivé apres avoir pris "+nombretaxis+" taxis, ma santé mentale est à "+santeDeJonh)
    }
}


