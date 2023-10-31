let favoritePizza: string[] = ['Fajita', 'ChickenTikka', 'Supreme'];

// Using a for loop to print each pizza name
console.log('My favorite pizza:');
for (const pizza of favoritePizza) {
    console.log(pizza);
}

// Using a for loop to print a sentence for each pizza
console.log('\nMy thoughts on each pizza:');
for (const pizza of favoritePizza) {
    console.log(`I like ${pizza} pizza.`);
}

// A final sentence about how much you like pizza
console.log('\nI really love pizza!');
