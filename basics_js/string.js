let name = "Daksh";
let repos = 100;

// old way
// console.log(name + " has " + repos + " repos");

// new way string interpolation
console.log(`${name} has ${repos} repos`);

const gName = new String("Daksh is trying to learn JS");
console.log(gName.charAt("3"));

const fName = "    Daksh ";
const lName = " Parmar     ";

console.log(fName.trim() + " " + lName.trim());

const url = "https://www.google.com/daksh%20parmar";
console.log(url.replace("%20", "-"));

console.log(gName.split(" "));
