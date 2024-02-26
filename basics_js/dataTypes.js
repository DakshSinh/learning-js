"use strict";

// alert() does not work as we use NodeJs
// null is a object
// js is dynamically typed

/*
    primitive -> number, bigint, string, boolean, null, undefined, symbol
    -> call by value
*/
/*
    non-primitive -> array, objects, functions
    -> call by refrence
*/

const id = Symbol("123");
const id2 = Symbol("123");

console.log(id === id2);

const heros = ["daksh", "poojan", "nitya"];

let myInfo = {
  name: "daksh",
  age: 19,
};

const myFunc = function () {
  console.log("My Function");
};

console.log([myFunc, myInfo, heros]);
console.log(myInfo);