"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assignment41_1 = require("./assignment41");
function make_great(magicians) {
    var greatMagicians = magicians.slice(); // Make a copy of the original array
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = greatMagicians[i] + ' the Great';
    }
    return greatMagicians; // Return the modified array
}
var magicianNames = ['Magician 1', 'Magician 2', 'Magician 3'];
// Call make_great with a copy of the array and store the new array
var greatMagicians = make_great(magicianNames);
// Call show_magicians to show the original array
console.log('Original Magicians:');
(0, assignment41_1.default)(magicianNames);
// Call show_magicians to show the modified array
console.log('\nGreat Magicians:');
(0, assignment41_1.default)(greatMagicians);
