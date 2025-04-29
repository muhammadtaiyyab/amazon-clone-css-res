// for a given array of numbers, print the square of each value using the forEach loop

// let nums = [2, 3, 4, 5, 6];

// nums.forEach((num) => {
//     console.log(num * num); // num **2
// })

// ----------------------------------------------------------------------------------------------------

// alternate or another valid way to write a callback function

let nums = [2, 3, 4, 5, 6];

let calcSquare = (num) => {
    console.log(num * num);
}

nums.forEach(calcSquare);
