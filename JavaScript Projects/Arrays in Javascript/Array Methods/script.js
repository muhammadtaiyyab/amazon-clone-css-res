// Push Method in Arrays

// let foodItems = ["apple", "mango", "banana", "orange", "grapes"];

// foodItems.push("red anar", "cherry", "kivi");

// console.log(foodItems);

// --------------------------------------------------------------------------------------------

// Pop Method in Arrays

// let foodItems = ["apple", "mango", "banana", "orange", "grapes"];

// console.log(foodItems);

// let deletedItem = foodItems.pop();

// console.log(foodItems);

// console.log("deleted item is:", deletedItem);

// --------------------------------------------------------------------------------------------------------

// toString() method in Array

// let foodItems = ["apple", "mango", "banana", "orange", "grapes"];

// console.log(foodItems);

// console.log(foodItems.toString()); // It will converts an array to string

// ---------------------------------------------------------------------------------------------------------

// let marks = [97, 86, 54, 48, 36];

// console.log(marks.toString());

// --------------------------------------------------------------------------------------------------

// Concat Method in Array

// let marvelHeroes = ["thorr", "spiderman", "ironman"];

// let dcHeroes = ["superman", "batman"];

// let heroes = marvelHeroes.concat(dcHeroes);

// console.log(heroes);

// ----------------------------------------------------------------------------------------

// unshift method in Array

// let marvelHeroes = ["thorr", "spiderman", "ironman"];

// marvelHeroes.unshift("antman");

// ---------------------------------------------------------------------------------------

// shift method in Array

// let val = marvelHeroes.shift();

// console.log("deleted item is:", val);

// ------------------------------------------------------------------------------------------

// slice method in Array

// let marvelHeroes = ["thorr", "spiderman", "ironman", "antman", "Dr.Strange"];
// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1, 2)); // ending index is non-inclusive and it will return only one element which positioned at index 1

// console.log(marvelHeroes.slice(1, 3)); // if we need 2 elements then we will give 3 index position then it will retun 2 elements

// console.log(marvelHeroes.slice(1)); // it will print all the elements from 1 to till end of the array.

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// splice method in Array

let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);

// console.log(arr);

// if we want to add element in array

// arr.splice(2, 0, 101);
// console.log(arr);

// if we want to delete an item or element in array

// arr.splice(3, 1);
// console.log(arr);

// if we want to replace an element in an array using splice method

arr.splice(3, 1, 104);
console.log(arr);

// if we pass only an index in splice method it will now act as a slice method in an array

arr.splice(4);
// console.log(arr);