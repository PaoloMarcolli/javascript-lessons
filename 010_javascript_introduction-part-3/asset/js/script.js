let nome='Edoardo';
let dichiarazioneVariabile = 'ciao';
nome = 'Marco';
let isOnline = true;
let array = [1,2,3,4,5];
let classe4 = ['Paolo','Luca','Gine'];
let persona = {
    nome: 'Edoardo',
    cognome: 'Ferrari', 
    cittaNascita: 'Napoli',
    eta: 32,
    codiceFiscale: 'FERRARMMN32',   
    coloriPreferiti: ['rosso','blu','verde']
}

// stringa tra apici ''
// case sensitive
// usare anche 0-9 e A-Z e a-z
// let Nome; sono differenti
// let NOME; sono differenti
// camelCase prima minuscola e seconda maiuscola
// si puo usare il _ ma non il -
// no parola riservata let for
// possiamo definire le variabili senza definire il tipo ( tipizzazione dinamica )
console.log(array[3]);
console.log(nome);
console.log(classe4[2]);
if (isOnline){
    console.log('Sei connesso');
}
else    
{
    console.log('Non sei connesso');
}
console.log(classe4);
console.log(persona.nome);
console.log(typeof persona.nome);
persona.nome=500;
console.log(typeof persona.nome);
console.log(persona.coloriPreferiti[1]);
//console.log(cognome) -> undefined;

document.addEventListener("DOMContentLoaded", function() {
    window.openConsole = function() {
      // Simula l'apertura degli strumenti di sviluppo in console
      console.log("%cApertura Console", "color: red; font-size: 22px");
    };
    openConsole();
  });