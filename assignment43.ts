import showmagicianl from "./assignment41";

function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.slice(); // Make a copy of the original array
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = greatMagicians[i] + ' the Great';
    }
    return greatMagicians; // Return the modified array
}

const magicianNames: string[] = ['Magician 1', 'Magician 2', 'Magician 3'];

// Call make_great with a copy of the array and store the new array
const greatMagicians = make_great(magicianNames);

// Call show_magicians to show the original array
console.log('Original Magicians:');
showmagicianl(magicianNames);

// Call show_magicians to show the modified array
console.log('\nGreat Magicians:');
showmagicianl(greatMagicians);
