//Exercice 1

//function add(num1, num2) {
// return num1 + num2;
//}

const add = (x, y) => x + y;

//function sub(num1, num2) {
//  return num1 > num2 ? num1 - num2 : num2 - num1;
//}

const sub = (x, y) => (x > y ? x - y : y - x);

//function mult(num1, num2) {
//  return num1 * num2;
//}

const mult = (x, y) => x * y;

//function div(num1, num2) {
//  return num1 > num2 ? num1 / num2 : num2 / num1;
//}

const div = (x, y) => (x > y ? x / y : y / x);

function calc(num1, num2) {
  console.log("La somme des nombres aleatoire: " + add(num1, num2));
  console.log("La difference des nombres aleatoire: " + sub(num1, num2));
  console.log("Le produit des nombres aleatoire: " + mult(num1, num2));
  console.log("La division des nombre aleatoire: " + div(num1, num2));
}

function init() {
  let num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100);
  console.log(num1 + " " + num2);
  calc(num1, num2);
}

init();
