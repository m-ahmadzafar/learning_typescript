// In ts we can define our own types.
// this gives error:
// let chad : ageStatus = "gay";
var jutt = "over18";
// we can use union for giving a type choice
function returnBoolORString() {
    return true;
}
// to find the type, use typeof
console.log(typeof jutt);
