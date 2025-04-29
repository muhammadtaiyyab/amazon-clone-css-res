// we are given an array of marks of students, filter out of the marks of students that scored 90+

// let marks = [97, 64, 32, 49, 99, 96, 86];

// const toppersArr = marks.filter((val) => {
//     return val > 90;
// })

// console.log(toppersArr);

// --------------------------------------------------------------------------------------------------------------

// take a number n as an input from user. create an array of numbers from 1 to n

let n = prompt("Enter a number : ");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

// ------------------------------------------------------------------------------------------------------------------

// use the reduce method to calculate sum of all numbers in the array

let sum = arr.reduce((res, curr) => {
    return res + curr;
})

console.log(`sum = ${sum}`);

// -------------------------------------------------------------------------------------------------------

// use the reduce method to calculate the product of all numbers in the array

let factorial = arr.reduce((res, curr) => {
    return res * curr;
})

console.log(`product = ${factorial}`);