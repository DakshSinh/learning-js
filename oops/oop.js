// // Object Literals

// const users = {
//     uName: 'Daksh',
//     loginCount: 10,
//     loginStatus: true,
//     getDetails: function () {
//         console.log(
//             this.uName,
//             this.loginCount,
//             this.loginStatus
//         )
//     }
// }

// console.log(users.getDetails())

// (new)Constructor functions -> 1 object literal -> multiple instances

function User(uName,loginCount,loginStatus) {
    this.uName = uName
    this.loginCount = loginCount
    this.loginStatus = loginStatus

    // Implicit not nescessary to write (implied)
    return this
}

// Problem
// const uOne = User("Daksh",1,true)
// const uTwo = User("Dev",2,false)
// console.log(uOne);

// Solution
// 1. new object is created
// 2. passes this.Vals
// 3. this added
// 4. get vals 
const uOne = new User("Daksh",1,true)
const uTwo = new User("Dev",2,false)

// Constructor -> refrence to the function
// InstanceOf
console.log(uOne.constructor);
