// let div = document.querySelector("div");
// console.log(div);

// --------------------------------------------------------------------------------------------------------

// Below we will see that how we will get the value of attribute by using the getAttribute method

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// ----------------------------------------------------------------------------------------------------------------

// Below we will see that how we will get the value of class attribute value by using the getAttribute method

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// -------------------------------------------------------------------------------------------------------------------

// Below we will see how to change the attribute value using setAttribute method

// console.log(para.setAttribute("class", "newClass"));

// ----------------------------------------------------------------------------------------------------------------

// Now we will access the style of div or node by doing the below

// let divv = document.querySelector("div");

// ---------------------------------------------------------------------------------------------------

// We can also change the style of a node in javaScript by doing the below

// divv.style.backgroundColor = "green";

// divv.style.backgroundColor = "purple";

// divv.style.fontSize = "26px";

// divv.innerText = "Hello!";

// divv.style.visibility = "hidden";

// ------------------------------------------------------------------------------------------------------------

// In this Selection, we will know that how to add / insert the new element

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);

// ---------------------------------------------------------------------------------------------------------------

// If we want to add the button at the end of the div then we will do the below

let div = document.querySelector("div");
// div.append(newBtn);

// ----------------------------------------------------------------------------------------------------------------

// If we want to add the button at the start of the div then we will do the below

// div.prepend(newBtn);

// ---------------------------------------------------------------------------------------------------------------

// If we want to add outside and just before the node then we will do the below

// div.before(newBtn);

// -----------------------------------------------------------------------------------------------------------------

// If we want to add outside and just after the node then we will do the below

// div.after(newBtn);

// ------------------------------------------------------------------------------------------------------------------

// If we want to add the GamepadButton, just after the paragraph then we will do the below.

// let p = document.querySelector("p");
// p.after(newBtn);

// ----------------------------------------------------------------------------------------------------------------------

// Now, we will create a new heading, and we want to add it at the top of the screen, in order to do that we will do the below

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

// ---------------------------------------------------------------------------------------------------------------------

// Now, we will see how to delete the element or node, we can do this by doing the below.
// Before, deleting the node, we first have to access the node.

let para = document.querySelector("p");
para.remove();

newHeading.remove();