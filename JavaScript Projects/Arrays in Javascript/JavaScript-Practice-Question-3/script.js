// create an array to store companies bloomberg, microsoft, uber, google, ibm, netflix
// a. remove the first company from the array
// b. reomove uber and add ola in its place
// c. add amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// console.log(companies);

// a. remove the first company from the array

// let deleteCompany = companies.shift();

// console.log(deleteCompany);

// --------------------------------------------------------------------------------------------

// b. reomove uber and add ola in its place

// let updatedCompanies = companies.splice(2, 1, "Ola");

// console.log(updatedCompanies);

// console.log(companies);

// -----------------------------------------------------------------------------------------------

// c. add amazon at the end

let updatedCompanies = companies.push("Amazon");

console.log(companies);