let divs = document.querySelectorAll("div");
// console.dir(divs);

// To access individual divs, we will do the below:

// console.log(divs[0]);

// Now adding some unique text to each of them

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// --------------------------------------------------------------------------------------------

// for (let div of divs) {
//     console.dir(div.innerText);
// }

let idx = 0;
for (let div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}