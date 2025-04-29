// create a p tag in html, give it a class & some styling.
// now create a new class in css and try to append this class to the p element.
// did you notice, how you overwrite the class name when you add a new one?
// solve this problem using classList

// ----------------------------------------------------------------------------------------------------------------

// now we have to do that; we have to create a new class in css and try to append this class to the p element

// for this purpose first we have to access the element

let para = document.querySelector("p");

// -------------------------------------------------------------------------------------------------------------------

// did you notice, how you can overwrite the class name when you add a new one? solve this problem using classList

// para.classList.add("newClass");
// para.classList;