/*
Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
//Ternary Operator  condition ? valueIfTrue : valueIfFalse
const isCar: boolean = car == 'subaru' ? true : false;
console.log("I predict True", car == 'subaru' ? true : false);
console.log("I predict False", car == 'subar' ? true : false);

let age: number = 20;
let isAdult: boolean = age >= 18 ? true : false;

console.log(age >= 18 ? true : false);

console.log(`Is the person an adult? I predict True ${isAdult}`);
age=17;
console.log(`Is the person an adult? I predict False ${isAdult}`);

console.log("I predict type of car true", typeof car=="string" ? true : false);
console.log("I predict type of car false", typeof car=="number" ? true : false);