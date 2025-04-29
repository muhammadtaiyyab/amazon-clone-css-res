// console.log("hello!");
// alert("apna college");

// ---------------------------------------------------------------------------------------------------------------------

// console.log(document.body);
// console.dir(document.body); // .dir is used to get all the properties and attributes of elements

// ------------------------------------------------------------------------------------------------------------------------

// console.dir(document.body.childNodes[1]);
// console.dir(document.body.childNodes[1].innerText = "Tayyab is Duffer");

// -----------------------------------------------------------------------------------------------------------------------------

// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);

// --------------------------------------------------------------------------------------------------------------------------------

// let headings = document.getElementsByClassName("heading1");
// console.log(headings);
// console.dir(headings);

// -----------------------------------------------------------------------------------------------------------------------------------

// let paragraph = document.getElementsByTagName("p");
// console.log(paragraph);
// console.dir(paragraph);

// ---------------------------------------------------------------------------------------------------------------

// Query Selector with tags

let firstElement = document.querySelector("p"); // It will return first element
console.dir(firstElement);

let allElement = document.querySelectorAll("p"); // It will return all elements
console.log(allElement);

// Query Selector with class

let firstEle = document.querySelector(".heading1"); // It will return first element
console.dir(firstEle);

let allEle = document.querySelectorAll(".heading1"); // It will return all elements
console.dir(allEle);

// Query Selector with Id

let myElement = document.querySelector("#heading"); // On the basis of ID it will return only one element
console.dir(myElement);

// -----------------------------------------------------------------------------------------------------------------------------------

// DOM Manipulation Properties

console.dir(document.body.firstChild);

// ----------------------------------------------------------------------------------------------------------------------

// DOM Manipulation Properties with innerText

let div = document.querySelector("div");
console.dir(div);

// ------------------------------------------------------------------------------------------------------------------

let heading = document.querySelector("h1");

