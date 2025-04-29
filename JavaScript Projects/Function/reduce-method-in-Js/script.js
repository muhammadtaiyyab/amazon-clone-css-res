// reduce method in javascript

// let arr = [1, 2, 3, 4];

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// })

// console.log(output);

// ------------------------------------------------------------------------------------------------

// how to return the largest number from an array using the reduce method

let arr = [5, 6, 2, 1, 3];

const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})

console.log(output);

