// In ts we can define our own types.

// for example: using Union |

type ageStatus = "under18" | "is18" | "over18";
type primeUnder10 = 2|3|5|7

// this gives error:
// let chad : ageStatus = "gay";

let jutt :ageStatus = "over18";

// we can use union for giving a type choice

function returnBoolORString(): Boolean | String {
    return true;
}

// to find the type, use typeof
console.log(typeof jutt); //output: string

// in TS, the types are like a set. 
// So, an obj of Boolean | String is a union since
// it can either type. 