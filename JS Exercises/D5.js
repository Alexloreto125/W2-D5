/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("ESERCIZIO: 1 ");
const pets = ["dog", "cat", "hamster", "redfish"];
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO: 2 ");
pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("ESERCIZIO: 3 ");
pets.sort().reverse();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO: 4 ");
const firstElement = pets.shift();
pets.push(firstElement);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("ESERCIZIO: 5 ");
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
const licensePlate = "EPICODE";
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlate;
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("ESERCIZIO: 6 ");
const NuovaCar = {
  brand: "Nissan",
  model: "Skyline",
  color: "blue",
  trims: ["R32", "R33", "R34"],
};
cars.push(NuovaCar);
console.log(cars);
for (let i = 0; i < cars.length; i++) {
  const macchine = cars[i];
  if (macchine.trims.length > 0 || macchine.trims.length > 1) {
    macchine.trims.pop();
  }
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("ESERCIZIO: 7 ");

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  const auto = cars[i];
  if (auto.trims.length >= 0) justTrims.push(auto.trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("ESERCIZIO: 8 ");

for (let i = 0; i < cars.length; i++) {
  const auto = cars[i];
  const FirstLetter = auto.color.charAt(0).toLowerCase();
  if (FirstLetter === "b") {
    console.log(cars[i].color, "Fizz");
  } else {
    console.log(cars[i].color, "Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("ESERCIZIO: 9 ");

/* ESERCIZIO 10

    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("ESERCIZIO: 10 ");
const charactersArray = ["g", "n", "u", "z", "d"];
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const indexAlfabeto = [];
for (let i = 0; i < charactersArray.length; i++) {
  const carattere = charactersArray[i];

  switch (carattere) {
    case "a":
      indexAlfabeto.push(0);
      break;
    case "b":
      indexAlfabeto.push(1);
      break;
    case "c":
      indexAlfabeto.push(2);
      break;
    case "d":
      indexAlfabeto.push(3);
      break;
    case "e":
      indexAlfabeto.push(4);
      break;
    case "f":
      indexAlfabeto.push(5);
      break;
    case "g":
      indexAlfabeto.push(6);
      break;
    case "h":
      indexAlfabeto.push(7);
      break;
    case "i":
      indexAlfabeto.push(8);
      break;
    case "j":
      indexAlfabeto.push(9);
      break;
    case "k":
      indexAlfabeto.push(10);
      break;
    case "l":
      indexAlfabeto.push(11);
      break;
    case "m":
      indexAlfabeto.push(12);
      break;
    case "n":
      indexAlfabeto.push(13);
      break;
    case "o":
      indexAlfabeto.push(14);
      break;
    case "p":
      indexAlfabeto.push(15);
      break;
    case "q":
      indexAlfabeto.push(16);
      break;
    case "r":
      indexAlfabeto.push(17);
      break;
    case "s":
      indexAlfabeto.push(18);
      break;
    case "t":
      indexAlfabeto.push(19);
      break;
    case "u":
      indexAlfabeto.push(20);
      break;
    case "v":
      indexAlfabeto.push(21);
      break;
    case "w":
      indexAlfabeto.push(22);
      break;
    case "x":
      indexAlfabeto.push(23);
      break;
    case "y":
      indexAlfabeto.push(24);
      break;
    case "z":
      indexAlfabeto.push(25);
      break;
    default:
  }
}

console.log("Indice Alfabeto ", indexAlfabeto);
console.log("Carattere", charactersArray);
