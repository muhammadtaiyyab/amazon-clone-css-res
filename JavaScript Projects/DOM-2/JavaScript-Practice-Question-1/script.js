// Create a new button Element. Give it a text "click me", background color of red and text color of white. Insert the button as the first element inside the body tag.

// 1. We will create a button first.

let newBtn = document.createElement("button");

// 2. Now, we have to add the innerText in button.

newBtn.innerText = "click me!";

// 3. Now, we have to add the background color of red and text color of white.

newBtn.style.backgroundColor = "red";

newBtn.style.color = "white";

// 4. Now, we have to insert the button as the first element inside the body tag.

document.querySelector("body").prepend(newBtn);