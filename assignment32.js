// List of current users 
var currentusers = ['Iqbal', 'Rayyan', 'Rizwan', 'Zafar'];
// List of new users
var newusers = ['Sajid', 'Arsalan', 'Sabir', 'Javed', 'Rashid'];
var _loop_1 = function (newUsername) {
    // Check if the new username (in lowercase) is in the current users (in lowercase)
    var usernameExists = currentusers.some(function (currentUser) { return currentUser.toLowerCase() === newUsername.toLowerCase(); });
    if (usernameExists) {
        console.log("The username \"".concat(newUsername, "\" is not available. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(newUsername, "\" is available."));
    }
};
// Loop through the new_users list
for (var _i = 0, newusers_1 = newusers; _i < newusers_1.length; _i++) {
    var newUsername = newusers_1[_i];
    _loop_1(newUsername);
}
