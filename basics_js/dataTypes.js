"use strict";

// alert() does not work as we use NodeJs
// null is a object
// js is dynamically typed

/*
    primitive -> number, bigint, string, boolean, null, undefined, symbol
    -> call by value
    -> Stack memory used (copy of data is provided)
*/
/*
    non-primitive -> array, objects, functions
    -> call by refrence
    -> heap memory used (refrence of original value)
*/

// const id = Symbol("123");
// const id2 = Symbol("123");

// console.log(id === id2);

// const heros = ["daksh", "poojan", "nitya"];

// let myInfo = {
//   name: "daksh",
//   age: 19,
// };

// const myFunc = function () {
//   console.log("My Function");
// };

// console.log([myFunc, myInfo, heros]);
// console.log(myInfo);

let uName = "Daksh";
let tempName = uName;

tempName = "Not Daksh";

console.log(tempName);
console.log(uName);

let user1 = {
  email: "demo.com",
  upi: "demo_upi",
};

let user2 = user1;
user2.email = "test.com";

console.log(user1.email);
console.log(user2.email);
