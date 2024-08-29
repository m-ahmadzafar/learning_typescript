// In ts we can define our own types.
// this gives error:
// let chad : ageStatus = "gay";
var jutt = "over18";
// we can use union for giving a type choice
function returnBoolORString() {
    return true;
}
// to find the type, use typeof
console.log(typeof jutt); //output: string
// in TS, the types are like a set. 
// So, an obj of Boolean | String is a union since
// it can either type. 
