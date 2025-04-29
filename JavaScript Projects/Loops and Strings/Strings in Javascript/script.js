// Create String

// let str = "Apna College";

// console.log(str[0]);

// ----------------------------------------------------------------------------

// Template Literals

// let specialString = `This is a template literal`;
// console.log(typeof specialString);

// -------------------------------------------------------------------------------

// Template Literals

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `The price of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("The price of", obj.item, "is", obj.price, "rupees");

// -------------------------------------------------------------------------------------

// Template Literals

// let specialString = `This is a special type of string; which is known as Template Literals ${1+2+3}`;

// console.log(specialString);

// ----------------------------------------------------------------------------------------------------

// Escape Characters

// console.log("Apna\nCollege");

// console.log("Apna\tCollege");


// let str1 = "Apna\nCollege";
// console.log(str1.length);

// let str2 = "Apna\tCollege";
// console.log(str2.length);

// ------------------------------------------------------------------------------------------------

// // String Methods in JavaScript - toUpperCase

// let str = "Apna College";
// let newStr = str.toUpperCase(); // All the string methods will not change the original string

// console.log(str); // Output will be Apna College

// console.log(newStr); // Output will be APNA COLLEGE

// ----------------------------------------------------------------------------------------------------

// String Methods in JavaScript - toUpperCase

// let str = "Apna College";
// str = str.toUpperCase(); // All the string methods will not change the original string

// console.log(str); // Now, the Output will be APNA COLLEGE

// ---------------------------------------------------------------------------------------------------------

// String Methods in JavaScript - toLowerCase

// let str = "Apna College";
// str = str.toLowerCase(); // All the string methods will not change the original string

// console.log(str); // Now, the Output will be apna college

// ---------------------------------------------------------------------------------------------------------

// String Methods in JavaScript - trim()

// let str = "    Apna College  JS    ";
// console.log(str.trim());

// -----------------------------------------------------------------------------------------------------

// Slice Method in JavaScript

// let str = "01234567";
// console.log(str.slice(1, 7));

// let str1 = "hello";
// console.log(str1.slice(0, 3));

// ------------------------------------------------------------------------------------------------------

// Concatenation Method in JavaScript

// let str1 = "apna";
// let str2 = "college";

// let result1 = str1.concat(str2);
// console.log(result1);

// let result2 = str2.concat(str1);
// console.log(result2);

// console.log(str1.concat(str2));

// We can also concatenate the two strings by using the below

// let res = str1 + str2;
// console.log(res);

// let res1 = "I am learning coding from " + str1 + str2;
// console.log(res1);

// ---------------------------------------------------------------------------------------------------

// We can also use replace method to search and replace a value in a string

// let str = "pant";

// console.log(str.replace("e", "a"));  // It will replace just one matching values

// let str1 = "hellololo";

// console.log(str1.replaceAll("lo", "p")); // It will replace all the matching values

// -------------------------------------------------------------------------------------------------------

// If we want to retrieve any character from any index then we will use the structuredClone.charAt(idx) method

// let str = "IloveJs";

// console.log(str.charAt(0));

// console.log(str[0]); // "I" will be printed on the screen

// str[0] = "T";

// console.log(str); // "ILoveJs" will be printed because we cannot change the original string because in JavaScript strings are immutable


// ---------------------------------------------------------------------------------------------------------------------------------------------------

let str = "IloveJs";

str= str.replace("I", "T"); // We have to use replace method in order to replace the letter "I" with "T"

console.log(str);