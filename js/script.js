// Lista Cognomi
// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.







var userLastName = prompt("write here your Lastname");
console.log(userLastName);
var lastNameList = [ "Davigo", "Parsival", "Onere", "De Magistri", "Berteselli"];
console.log(lastNameList);

lastNameList.push(userLastName);
console.log(lastNameList);

lastNameList.sort();
console.log(lastNameList);


for (var i = 0; i < lastNameList.length; i++) {

  lastNameList[i]
  console.log(lastNameList[i]);
}

var humanPosition = [];

for (var j = 1; j < 7; j++) {
  humanPosition.push(j)
  console.log(humanPosition);
}

// var result = lastNameList += humanPosition;
// console.log(result);
// var humanPosition = "";
//
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
// for (var j = 1; j < 7; j++) {
//   console.log(j);
// }
//
// for (var k = 0; k < lastNameList.length; k++) {
//
// }
