/*
42.	Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians 
by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
*/

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicianNames: string[] = ['magician 1', 'magician 2'];

function make_great(magicianNames: string[]): void {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = magicianNames[i] + ' the Great';
    }
}

show_magicians(magicianNames);
make_great(magicianNames);