// 1
// const userLogin = true;

// if (!userLogin) {
//     console.log(`This will run`);   
// } else {
//     console.log(`This will not run`);
// }

// const temp = 60

// if (temp < 0) {
//     console.log(`It's freezing outside`);
// }else if (temp >= 0 && temp <= 30) {
//     console.log(`It's moderate outside`);
// }else if (temp > 30) {
//     console.log(`It's hot outside`);
// }else {
//     console.log(`It's not a valid temperature`);
// }

// Short hand if-else
// const temp = 55;

// // Use a ternary operator to log a message to the console based on the value of temp
// console.log(
//   (temp < 60) ? "It's less than 60" : "It's 60 or more"  // Value if condition is false
// );

// let month = "2"
// switch (month) {
//     case 0:
//         monthName = "January";
//         console.log(monthName);
//         break;
//     case 1:
//         monthName = "February";
//         console.log(monthName);
//         break;
//     case "2":
//         monthName = "March";
//         console.log(monthName);
//         break;
//     default:
//         monthName = "Invalid month";
//         console.log(monthName);
//         break;
// }

// 2
// Truthe and Falsy values

// const user = []
// if (user) {
//     console.log(`You are logged in`);
// } else {
//     console.log(`Please log in`);
// }

// Falsey values: false, , -0, BigInt 0n, null, undefined, NaN, 0, ""
// Truthy values: true, {}, [], 1, "0", "false", "null", "undefined", "NaN", "0", "0n"

// console.log(Boolean("NaN"));

// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//     console.log(`Object is empty`);
// }

// Nullish coalescing operator (??): null and undefined

let val1;
valA = null;
valB = null;
val1 = valA ?? valB ?? "default value";
console.log(val1);