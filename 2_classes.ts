// like js, ts also supports classes and objects


// for js , we know 
// A JavaScript class is not an object.
// It is a template for JavaScript objects.
class Chad {
    
    // for ts, we have to state type
    // otherwise, we get errors
    chadName: String;
    chadAge: Number;

    constructor(chadName, chadAge){
        this.chadName = chadName;
        this.chadAge = chadAge;
    }
}

const chad1 : Chad = new Chad("pookie", 99);
// we can use interfaces (in this case class) in functions
// in JS its a object, here we declare it in params

function getChadValue(chad2: Chad){
    chad2.chadAge = 12;

}
// to specify return type 
function juttifier(chad3: Chad): Chad {
    chad3.chadName = "Jutt";
    return chad3;
}