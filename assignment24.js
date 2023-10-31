"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var countryname1 = 'Pakistan';
var countryname2 = 'pakistan';
console.log(countryname1 == countryname2); // false (case-insensitive equality)
console.log(countryname1 === countryname2); // false (strict equality)
var age = 20;
console.log(age >= 18 ? true : false);
var x = true;
var y = false;
console.log(x && y); // false (true && false = false)
console.log(x && !y); // true (true && true = true)
var a = true;
var b = false;
console.log(a || b); // true (true || false = true)
console.log(!a || b); // false (false || false = false)
