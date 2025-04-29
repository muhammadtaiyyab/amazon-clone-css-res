// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their fullname and ending with the fullname 
// length.

let fullName = prompt("Enter your full name without spaces");

// console.log(fullName); 

let username = "@" + fullName + fullName.length;

console.log(username);