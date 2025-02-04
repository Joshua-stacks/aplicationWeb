const liste1 = [-23, 230, 334, -90, -76, 132, -77, 305];
const liste2 = ["ami", "carotte", "midi", "toujours", "hier", "demain"];
const liste3 = [
  { nom: "Charity", prenom: "Selar", email: "cselar0@cloudflare.com" },
  { nom: "Noel", prenom: "Jermy", email: "njermy1@bbb.org" },
  { nom: "Killian", prenom: "Keri", email: "kkeri2@sphinn.com" },
  { nom: "Aleta", prenom: "Thurl", email: "athurl3@bandcamp.com" },
  { nom: "Edna", prenom: "Ingyon", email: "eingyon4@telus.ca" },
];
// exercice 1

let filtre = liste1.filter((x) => x > 0);
console.log(filtre);

// exercice 2
let filtre2 = liste1.filter((x) => x > 0 && x % 2 === 0);
console.log(filtre2);

// exercice 3

let filter3 = liste1.filter((x) => x % 10 != 0);
console.log(filter3);

// exercice 4

let filter4 = liste2.filter((x) => x.length <= 5);
console.log(filter4);

// exercice 5

let filter5 = liste3.filter((x) => !x.email.endsWith(".com"));
console.log(filter5);

//exercice 6

let map = liste2.map((x) => x.length);
console.log(map);

// exercice 7

let map2 = liste1.map((x) => x * x);
console.log(map2);

//exercice 8

let map3 = liste3.map((x) => x.prenom);
console.log(map3);

//exercice 9

let filMapRed = liste1
  .filter((x) => x > 0)
  .map((x) => x * x)
  .reduce((x, y) => x + y);

console.log(filMapRed);

// exercice 10

const afficherArray = (array) => array.forEach((x) => console.log(x));

afficherArray(liste1);

// exercice 11

const sum = (array) => array.reduce((x, y) => x + y);

console.log(sum([1, 2, 3, 4, 5]));

// exercice 12

const reduceMin = (array) => array.reduce((x, y) => Math.min(x, y));
console.log(reduceMin([2, 3, 4, 5, 1]));

// exercice 13

const countOddsAndEvens = (numbers) =>
  numbers.reduce(
    (count, num) => {
      num % 2 === 0 ? count.evens++ : count.odds++;
      return count;
    },
    { odds: 0, evens: 0 }
  );

console.log(countOddsAndEvens([11, 2, 36, 4, 15]));
