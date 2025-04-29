const pi = 3.14;
console.log(pi);

let a;
console.log(a);

let b;
b = 10;
console.log(b);

{
    let y = 10;
    console.log(y);
}

{
    let y = 20;
    console.log(y);
}

let age = 24;

//Below is to check the type of variable
typeof age;


let price = 100.59;


let fullName = "Tony Stark";

let isFollow = true;


let x;

let z = null;

let n = BigInt('123');


let k = Symbol("Hello!");


const student = {
    fullName : "Muhammad",
    age : 29,
    cgpa : 2.94,
    isPass : true,
};

// Two methods to access keys from objects

//1
console.log(student["age"]);
//2
console.log(student.age);

console.log(student["cgpa"]);

student["age"] = student["age"] + 1;

console.log(student["age"]);

student["fullName"] = "Tayyab";
console.log(student["fullName"]);