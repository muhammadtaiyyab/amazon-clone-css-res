// filter method in javascript

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// })

// console.log(evenArr);

// ----------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let oddArr = arr.filter((val) => {
//     return val %2 !== 0;
// })

// console.log(oddArr);

// ------------------------------------------------------------------------------------

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let greaterArr = arr.filter((val) => {
    return val > 3;
})

console.log(greaterArr);
