'use strict'

let numeroUtente = document.getElementById("numero-utente");
let sceltaUtente = document.getElementById("scelta-utente"); 
const btnGenerate = document.getElementById("btn");
const vincitore = document.getElementById("vincitore");
btnGenerate.addEventListener('click', function(e) {
    e.preventDefault();

    function numeroRandom (){
        let numeroComputer = Math.floor(Math.random() * 5) + 1;
        return numeroComputer;
    }

    const rndComputerNumber = numeroRandom();
    let numeroComputer = document.getElementById("numero-computer");
    numeroComputer.innerHTML = rndComputerNumber;
    
    const somma = document.getElementById("somma");
    somma.innerHTML = parseInt(numeroUtente.value) + rndComputerNumber;

    function pariEdispari() {
        if (somma % 2 === 0) {
            if (sceltaUtente === "pari") {
                vincitore.innerText = "vince l'utente"
            } else if (sceltaUtente === "dispari"){
                vincitore.innerText = "vince il computer"
            }
        } else {
            if (sceltaUtente === "pari") {
                vincitore.innerText = "vince il computer"
            } else if (sceltaUtente === "dispari"){
                vincitore.innerText = "vince l'utente"
            }
        }
        return pariEdispari;
    }
    pariEdispari();
});


