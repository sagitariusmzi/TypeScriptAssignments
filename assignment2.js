/*Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var pname = "M rayyan iqbal";
console.log(pname.toLocaleLowerCase());
console.log(pname.toLowerCase());
console.log(pname.toUpperCase());
var titleCase = pname
    .split(" ")
    .map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase(); })
    .join(" ");
console.log(titleCase);
