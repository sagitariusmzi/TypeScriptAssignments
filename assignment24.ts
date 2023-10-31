/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

const countryname1: string = 'Pakistan';
const countryname2: string = 'pakistan';

console.log(countryname1 == countryname2);  // false (case-insensitive equality)
console.log(countryname1 === countryname2); // false (strict equality)

let age: number = 20;

console.log(age >= 18 ? true : false);

const x: boolean = true;
const y: boolean = false;

console.log(x && y); // false (true && false = false)
console.log(x && !y); // true (true && true = true)

const a: boolean = true;
const b: boolean = false;

console.log(a || b); // true (true || false = true)
console.log(!a || b); // false (false || false = false)

const numArray: number[] = [1, 2, 3, 4, 5];
const numFind: number = 3;

if (numArray.includes(numFind)) {
    console.log(`${numFind} is in the array.`);
} else {
    console.log(`${numFind} is not in the array.`);
}

export{};

