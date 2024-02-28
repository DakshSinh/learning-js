// 1
// IIFE: Immediately Invoked Function Expression
// To avoid global scope pollution

// // Named iiFE
// (function demo() {
//     console.log(`DB connected`);
// })();

// // Anonymous iiFE
// ((name) => {
//     console.log(`DB connected ${name}`);
// })("Daksh");

( () => (console.log(`DB connected`)) )();
