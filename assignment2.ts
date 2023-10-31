/*Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let pname:string="M rayyan iqbal"

console.log(pname.toLocaleLowerCase());
console.log(pname.toLowerCase());
console.log(pname.toUpperCase());

const titleCase = pname
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(titleCase);