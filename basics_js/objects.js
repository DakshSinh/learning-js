// not singelton while using literals
// object literals

// const mySym = Symbol("key1")

// const jsUser = {
//     //key  //val
//     //string
//     name: "Daksh",
//     "full name": "Daksh Parmar",
//     // Symbol as a key
//     [mySym]: "myKey1",
//     age: 18,
//     location: "Surat",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Tuseday"]
// }

// jsUser.name = "Dev"
// // Object.freeze(jsUser)
// jsUser.name = "Nitya"

// // console.log(jsUser);
// // console.log(jsUser["full name"]);
// // console.log(jsUser[mySym]);

// jsUser.greeting = function(){
//     console.log(`Hi, ${this.name}`);
// }
// console.log(jsUser.greeting());

// const singleTon = new Object()
// const user = {}

// user.id = "1"
// user.name = "Daksh"
// user.isLoggedIn = false

// console.log(user)

// const newUser = {
//     emial: "abc@gmail.com",
//     fullName: {
//         first: "Daksh",
//         middle: {
//             name: "Anupsinh"
//         },
//         last: "Parmar",
//     }
// }

// console.log(newUser.fullName);

// const obj1 = {1: "a"}
// const obj2 = {2: "b"}

// const objComb = {obj1, obj2}
// const objComb = Object.assign({}, obj1, obj2)
// console.log(objComb);

// Currently used 
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// // db array of objects
// const user = [
//     {
//         id: 1,
//         email: "abc@gmail.com"
//     }
// ]

// console.log(user[0].email)
// console.log(user.hasOwnProperty('id'));


// Destrucutring 
// const course = {
//     name: "JS",
//     price: 10,
//     prof: "Daksh"
// } 

// const {name} = course

// console.log(name);

// APIs

// API -> DATA { JSON } -> USER

// {
//     "name": "Daksh",
//     "email": "abc@gmail.com"
// }

// // OR

// [
//     {},
//     {},
//     {}
// ]


