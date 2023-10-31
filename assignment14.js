/*Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
var GuestList = ["Javed", "Zafar", "Rayyan"];
for (var i = 0; i < 3; i++) {
    console.log("Dear ".concat(GuestList[i], " I would like to invite you on Dinner"));
}
