function xyz() {
    console.log("void function");
}
// function with callbacks
function callback(name, cb) {
    console.log("Rohan");
    cb("Rohan");
}
var greet = function (arg) {
    console.log("Hello Good Morning ".concat(arg));
};
callback("Rohan", greet);
