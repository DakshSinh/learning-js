// const code = ["IN", "US", "UK", "AU"];

// const val = code.forEach((item) => {
//     console.log(item);
//     return item;
// })

// console.log(val.code[1]); // undefined

// Filter

// const num = [1, 2, 3];
// const val = num.filter((item) => (item > 5))
// val.forEach((item) =>( console.log(item) )); 

// const val = num
//     .map((item) => (item * 4))
//     .map((item) => (item + 10))
//     .filter((item) => (item > 5))
// console.log(val);

// Reduce

// const num = [1, 2, 3];
// const val = num.reduce((acc, item) => (acc + item), 1);
// console.log(val);

const shoppingCart = [
    {
        name: "apple",
        price: 100
    }, {
        name: "banana",
        price: 200
    }, {
        name: "cherry",
        price: 300
    }
];

const total = shoppingCart.reduce((acc, item) => (acc + item.price), 0);
console.log(total);