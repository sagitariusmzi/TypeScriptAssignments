var favoritePizza = ['Fajita', 'ChickenTikka', 'Supreme'];
// Using a for loop to print each pizza name
console.log('My favorite pizza:');
for (var _i = 0, favoritePizza_1 = favoritePizza; _i < favoritePizza_1.length; _i++) {
    var pizza = favoritePizza_1[_i];
    console.log(pizza);
}
// Using a for loop to print a sentence for each pizza
console.log('\nMy thoughts on each pizza:');
for (var _a = 0, favoritePizza_2 = favoritePizza; _a < favoritePizza_2.length; _a++) {
    var pizza = favoritePizza_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// A final sentence about how much you like pizza
console.log('\nI really love pizza!');
