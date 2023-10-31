/*
37.	Large Shirts: Modify the make_shirt() function
so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.
*/
function make_shirt(size, msg) {
    if (size === void 0) { size = "Large"; }
    if (msg === void 0) { msg = "I love TypeScript"; }
    console.log("You ordered a Shirt ".concat(size, " and message: ").concat(msg));
}
// Large shirt with the default message
make_shirt();
// Medium shirt with the default message
make_shirt('Medium');
// Shirt of any size with a different message
make_shirt('Small', 'TypeScript is awesome!');
