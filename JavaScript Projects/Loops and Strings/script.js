// Print Apna College 5 times using for loop

// for(let count = 1; count <= 5; count++) {
//     console.log("Apna College");
// }

//-------------------------------------------------------------------------

// Calculate sum of 1 to 5 numbers

// let sum = 0;
// let n = 5;
// for(let i = 1; i <= n; i++)

// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log("sum is:", sum);

// console.log("Loop has ended");

//-----------------------------------------------------------------------------------------------

// Calculate sum of 1 to n numbers

// let sum = 0;
// let n = 100;

// for(let i = 1; i <= n; i++) {
//     sum = sum + i;
// }

// console.log("sum is:", sum);

// console.log("Loop has ended");

//------------------------------------------------------------------------------------------------

// Print Apna College 5 times using for loop

// for(let i = 0; i <= 5; i++) {
//     console.log("i=", i);
// }
// console.log(i);

// We cannot do this, because we will get an error, because it is defined for the block of for-loop, if we have to use i then we have to redeclare it again.

// If we use var keyword instead of let keyword then i will be printed on the screen because we have read that var contains global scope, so for this we will get the value of i

// for(var i = 1; i <= 5; i++) {
//     console.log("i =", i);
// }

// console.log(i);

// console.log("Loop has ended");

// -------------------------------------------------------------------------------------------

// While loop

// let i = 1;

// while (i <= 5) {
//     console.log("i =", i);
//     i++;
// }

// ----------------------------------------------------------------------------------------------

// While loop

// let i = 1;

// while (i <= 10) {
//     console.log("Apna College");
//     i++;
// }

// ----------------------------------------------------------------------------------------------

// do-while loop

// let i = 20;

// do{
//     console.log("Apna College");
//     i++;
// }while(i <= 10);

// ----------------------------------------------------------------------------------------------------

// do-while loop

// let i = 1;

// do{
//     console.log("i =", i);
//     i++;
// }while(i <= 5);

// ------------------------------------------------------------------------------------------------

// for-of Loop

// let str = "ApnaCollege";
// let size = 0; 
// for(let i of str){
//     console.log("i =", i);
//     size++;
// }

// console.log("The size of string is: ", size); // It will be 11; which is the size of string

// --------------------------------------------------------------------------------------------------------

// for-in Loop

let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

// for(let i in student) {
//     console.log(i);
// }

for(let key in student) {
    console.log("key =", key, "value =", student[key]);
}