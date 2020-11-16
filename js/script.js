
var userLastName = prompt("write here your Lastname");
// console.log(userLastName);
var lastNameList = [ "Davigo", "Parsival", "Onere", "De Magistri", "Berteselli"];
// console.log(lastNameList);

lastNameList.push(userLastName);
// console.log(lastNameList);

lastNameList.sort();
console.log(lastNameList);


for (var i = 0; i < lastNameList.length; i++) {

  lastNameList[i]
  // console.log(lastNameList[i]);
  if (userLastName == lastNameList[i]) {
    console.log(i);
    var position = document.getElementById('position').innerHTML = i + 1;
  }

};
