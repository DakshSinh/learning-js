let score = "A";

console.log(typeof score);
console.log(typeof score);

let valInNum = Number(score);
console.log(typeof valInNum);
console.log(valInNum);

/*
    "1" -> 1
    "A" -> NaN
    trur -> 1 false -> 0
*/

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

let aNum = 100;
let aNumString = String(aNum);

console.log(typeof aNumString);
console.log(aNumString);

// Operations +, -, /, %, *, **(power)

let val = 1
let negVal = -val
console.log(negVal);

let str1 = "Hi, "
let str2 = "Daksh"
let str3 = str1 + str2
console.log(str3);


console.log(typeof console.log("1" + 2));
console.log(typeof console.log(1 + "2"));
console.log(typeof console.log((1 + 2) + "2"));
console.log(typeof console.log((1 + "2") + 2));

console.log(+"");

let no1, no2, no3 = 2 + 2

let x = 1
console.log(x++);
let y = x
console.log(y);

let a = 1
console.log(++a);
let b = a
console.log(b);