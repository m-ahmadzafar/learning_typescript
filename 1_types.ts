// ts is like js.
// it just gives js predictable behavior.
// this means easier-to-find errors and
// less bug 


// in JS we have var, let and const.
// ts is like other langs with type safety

// hover on each line to see types
let helloWorld = "a string";
let age = 18;
let value = 99.99;
let isChad = true;
// all prim types: 
// boolean, bigint, null, number, string, symbol, and undefined

// infering type is difficult for some cases
// eg: dynamic programming


// we user interface to have a explicit obj

// think of this like a schema for obj
interface User {
    name: String;
    age: Number;
    isChad: Boolean
}

// now to declare obj:

const user: User = {
    name: "Ali",
    age: 27,
    isChad: true
}

console.log(user);