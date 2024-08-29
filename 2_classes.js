// like js, ts also supports classes and objects
// for js , we know 
// A JavaScript class is not an object.
// It is a template for JavaScript objects.
var Chad = /** @class */ (function () {
    function Chad(chadName, chadAge) {
        this.chadName = chadName;
        this.chadAge = chadAge;
    }
    return Chad;
}());
var chad1 = new Chad("pookie", 99);
// we can use interfaces (in this case class) in functions
// in JS its a object, here we declare it in params
function getChadValue(chad2) {
    chad2.chadAge = 12;
}
// to specify return type 
function juttifier(chad3) {
    chad3.chadName = "Jutt";
    return chad3;
}
// NOTE: since TS is structural, it can consider
// two things as the same
