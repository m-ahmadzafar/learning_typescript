// ts is like js.
// it just gives js predictable behavior.
// this means easier-to-find errors and
// less bug 
// in JS we have var, let and const.
// ts is like other langs with type safety
// hover on each line to see types
var helloWorld = "a string";
var age = 18;
var value = 99.99;
var isChad = true;
// now to declare obj:
var user = {
    name: "Ali",
    age: 27,
    isChad: true
};
console.log(user);
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// logs "12, 26"
var point = { x: 12, y: 26 };
logPoint(point);
