"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 */
var GuestLists = ["Javed", "Sajid", "Rayyan"];
for (var i = 0; i < 3; i++) {
    console.log("Dear ".concat(GuestLists[i], " I found a bigger dinner table"));
}
//unshift adds at the begining
GuestLists.unshift("parrot");
console.log(GuestLists);
GuestLists.splice(2, 0, "abc");
console.log(GuestLists);
GuestLists.push("New Guest");
console.log(GuestLists);
console.log("I can invite only two people for dinner");
console.log(GuestLists.length);
for (var i = 0; i = GuestLists.length; i++) {
    if (GuestLists.length > 2) {
        console.log("Dear ".concat(GuestLists.pop(), " We\u2019re sorry we can\u2019t invite you to dinner"));
    }
    else {
        console.log("Dear ".concat(GuestLists.pop(), " You are invited you to dinner"));
    }
}
for (var i = 0; i = GuestLists.length; i++) {
    GuestLists.pop();
}
console.log(GuestLists);
