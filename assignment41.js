"use strict";
/*
Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Create an array of magician names
var magicianNames = ['magician 1', 'magician 2'];
// Call the function to show the magicians
show_magicians(magicianNames);
exports.default = show_magicians;
