'use strict'
const parolaUtente = prompt("inserisci una parola");

function palindroma() {
    let inverti = parolaUtente;
    inverti = inverti.split('').reverse().join('');
    if (parolaUtente === inverti) {
        console.log("La parola inserita è palindroma");
    } else{
        console.log("La parola inserita non è palindroma")
    }
}
palindroma();
