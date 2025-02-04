// exercice 1
let items = ["Egg", 0.25, 12];

let [nameind, quantity, price] = items;

console.log(`Item: ${nameind}, Quantité: ${quantity}, Prix: ${price}`);

// exercice 2
const user = { name: "John", years: 30 };

// Votre code ici :
const { name: names, years: age, isAdmin = false } = user;

console.log(names); // John
console.log(age); // 30
console.log(isAdmin); // false

// exercice 3
const person = [12, "Chris", "Owen"];

const [ages, firstName, lastName] = person;

console.log(`Personne : - Age: ${ages}, Nom: ${firstName} ${lastName}`);

// exercice 4

const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

// Votre code ici :
const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);

// exercice 5

const combineTwoArrays = (array1, array2) => [...array1, ...array2];

// exercice 6

const combineAllArrays = (...arrays) => arrays.flat();
