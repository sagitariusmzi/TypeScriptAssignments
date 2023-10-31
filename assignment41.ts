/*
Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.
*/

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician names
const magicianNames: string[] = ['magician 1', 'magician 2'];

// Call the function to show the magicians
show_magicians(magicianNames);

export default show_magicians;
