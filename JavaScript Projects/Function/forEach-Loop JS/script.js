// forEach Loop in JavaScript

// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val) {
//     console.log(val);
// })

// ----------------------------------------------------------------------------------------------

// We use callback functions in the form of arrow function for forEach loop

// let arr = [1,2,3,4,5];

// let arr = ["sialkot", "lahore", "islamabad", "rawalpindi", "multan", "faisalabad", "karachi"];

// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// })

// ------------------------------------------------------------------------------------------------------

let arr = ["sialkot", "lahore", "islamabad", "rawalpindi", "multan", "faisalabad", "karachi"];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
})
